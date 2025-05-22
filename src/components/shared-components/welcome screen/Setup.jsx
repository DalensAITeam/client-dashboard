import React, { useEffect, useState, useRef } from "react";
import { socket } from '../../../socket/socket';
import debounce from 'lodash/debounce';
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import CustomDropdown from "../../dropdownComponent/dropdown";
import styles from "../../modalComponent/Modal.module.css";
import Modal from "../../modalComponent/modal";
import { setIpAddress } from "../../../Redux/ActionSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import VideoStream from "../../VideoStream/VideoStream";

function Camera() {
  const [isCamera, setIsCamera] = useState(true);
  const [cameraNumber, setCameraNumber] = useState();
  const [ipAddressFill, setIpAddressFill] = useState(1);
  const [animalType, setAnimalType] = useState(0);
  const [camera, setCamera] = useState('');
  const [cameraIpAddress, setCameraIpAddress] = useState([{ value: '' }]);
  const [isOpen, setIsOpen] = useState(false);
  const [previewStream, setPreviewStream] = useState(null);
  const [animalStats, setAnimalStats] = useState({
    threatState: '-',
    animalNumber: '-',
    animalAttacks: '-',
    healthyAnimals: '-',
    feedingAnimals: '-'
  });
  const [showVideoStream, setShowVideoStream] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const socketRef = useRef(null);

  const dispatch = useDispatch();

  // Create a debounced function for handling IP address changes
  const debouncedIpCheck = useRef(
    debounce((ip) => {
      setIsTyping(false);
      if (isValidIpAddress(ip)) {
        initializeCamera(ip);
      }
    }, 1000) // Wait 1 second after user stops typing
  ).current;

  const handleIpAddressChange = (index, value) => {
    setIsTyping(true);
    const newCameraIpAddress = [...cameraIpAddress];
    newCameraIpAddress[index].value = value;
    setCameraIpAddress(newCameraIpAddress);
    debouncedIpCheck(value);
  };

  const handleAnimalTypeChange = (value) => {
    setAnimalType(value);
    // Show video preview if we have a valid IP
    if (cameraIpAddress[0].value && isValidIpAddress(cameraIpAddress[0].value)) {
      setPreviewStream(formatIpToUrl(cameraIpAddress[0].value));
      setShowVideoStream(true);
    }
  };

  const initializeCamera = async (ip) => {
    try {
      // Show loading toast
      const loadingToast = toast.loading('Validating camera connection...');
      setPreviewStream(null);
      setShowVideoStream(false);

      const response = await fetch('http://localhost:7017/validate_camera', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ip_address: formatIpToUrl(ip) })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Camera validated successfully', { id: loadingToast });
        dispatch(setIpAddress(ip));
        
        if (animalType) {
          const socketConnected = await connectWithRetry();
          if (socketConnected) {
            setPreviewStream(formatIpToUrl(ip));
            setShowVideoStream(true);
          }
        }
      } else {
        toast.error(`Camera validation failed: ${data.message || data.error || 'Unknown error'}`, { id: loadingToast });
        setShowVideoStream(false);
      }
    } catch (error) {
      console.error('Error validating camera:', error);
      toast.error('Failed to validate camera. Please check your connection.');
      setShowVideoStream(false);
    }
  };

  useEffect(() => {
    // Socket connection handling with retry logic
    const connectWithRetry = () => new Promise((resolve) => {
      if (socketRef.current?.connected) {
        socketRef.current.disconnect();
      }

      socketRef.current = io('http://127.0.0.1:7017', {
        transports: ['polling', 'websocket'],
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 2000,
        reconnectionDelayMax: 10000,
        timeout: 10000,
        autoConnect: false,
        query: { ip_address: ip }
      });

      const connectionTimeout = setTimeout(() => {
        toast.error('WebSocket connection timed out');
        resolve(false);
      }, 10000);

      let retryAttempt = 0;
      const maxRetries = 3;

      const attemptConnection = () => {
        if (!socketRef.current.connected) {
          try {
            socketRef.current.connect();
          } catch (err) {
            console.error('Connection attempt failed:', err);
          }
        }

        socketRef.current.on('connect', () => {
          console.log('Socket connected successfully');
          toast.success('Connected to video server');
          retryAttempt = 0;
          clearTimeout(connectionTimeout);
          resolve(true);
        });

        socketRef.current.on('connect_error', (error) => {
          console.error('Socket connection error:', error.message);
          retryAttempt++;
          
          // Handle name resolution errors specifically
          if (error.message.includes('name resolution')) {
            toast.error('Server connection failed. Using fallback connection...', {
              duration: 2000
            });
            
            // Try alternative connection methods
            socketRef.current.io.opts.transports = ['polling'];
            setTimeout(() => {
              socketRef.current.connect();
            }, 1000);
            return;
          }
          
          if (retryAttempt <= maxRetries) {
            toast.loading(
              `Reconnecting to server (${retryAttempt}/${maxRetries})...`,
              { duration: 2000 }
            );
            setTimeout(attemptConnection, Math.min(2000 * Math.pow(2, retryAttempt - 1), 10000));
          } else {
            toast.error(
              'Could not connect to server. Please check your network connection.',
              { duration: 5000 }
            );
            clearTimeout(connectionTimeout);
            resolve(false);
          }
        });

        socketRef.current.on('disconnect', (reason) => {
          console.log('Socket disconnected:', reason);
          if (reason === 'io server disconnect' || reason === 'transport close') {
            // Server initiated disconnect or transport closed
            setTimeout(() => {
              console.log('Attempting to reconnect...');
              attemptConnection();
            }, 2000);
          }
        });

        socketRef.current.on('error', (error) => {
          console.error('Socket error:', error);
          toast.error(`Connection error: ${error.message}`);
          
          // For DNS-related errors, try alternative connection
          if (error.message.includes('name resolution')) {
            socketRef.current.io.opts.transports = ['polling'];
            socketRef.current.connect();
          }
        });
      };

      // Start connection process
      attemptConnection();
    });

    // Call connectWithRetry when component mounts
    connectWithRetry();

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, []);

  const handleInputIpAddress = () => {
    const lastInput = cameraIpAddress[cameraIpAddress.length - 1];
    if (lastInput && lastInput.value && lastInput.value.trim() !== '') {
      setCameraIpAddress(prevState => [...prevState, { value: '' }]);
    }
  };

  const handleInput = (index, value) => {
    const newLength = value.length;
    if (newLength === 1 && ipAddressFill < index + 1) {
      setIpAddressFill(index + 1);
    } else if (newLength === 0 && ipAddressFill > 0) {
      setIpAddressFill(ipAddressFill - 1);
    }

    // Update the IP address in the array
    setCameraIpAddress(prevState => {
      const newState = [...prevState];
      newState[index] = { value };
      return newState;
    });
  };

  const handleInputAnimal = (index, value) => {
    const newLength = value.length;
    if (newLength === 1 && animalType < index + 1) {
      setAnimalType(index + 1);
    } else if (newLength === 0 && animalType > 0) {
      setAnimalType(animalType - 1);
    }
  }

  const isValidIpAddress = (ip) => {
    // Allow full URLs that start with http
    if (ip.startsWith('http://')) {
      try {
        new URL(ip);
        return true;
      } catch {
        return false;
      }
    }
    // Check for valid IP format with optional port
    return /^(\d{1,3}\.){3}\d{1,3}(:\d+)?$/.test(ip);
  };

  const formatIpToUrl = (ip) => {
    if (!ip) return '';
    
    // If it's already a full URL, return it
    if (ip.startsWith('http://')) return ip;
    
    // Extract base IP, ignoring any port that might have been entered
    const baseIp = ip.split(':')[0];
    // Always use DroidCam format with port 4747
    return `http://${baseIp}:4747/video`;
  };

  const cameraHandler = () => {
    const ipAddresses = cameraIpAddress.map((input) => {
      const trimmedValue = input.value ? input.value.trim() : '';
      return trimmedValue;
    });
  
    const validIpAddresses = ipAddresses.filter((ip) => isValidIpAddress(ip));
  
    if (validIpAddresses.length === 0) {
      toast.error('Please enter at least one valid IP address');
      return;
    }

    try {
      // Transform IPs to proper URLs
      const formattedUrls = validIpAddresses.map(formatIpToUrl);
      
      // Set the first valid IP as preview
      setPreviewStream(formattedUrls[0]);
      
      // Store camera configurations
      dispatch(setIpAddress(formattedUrls));
      setIsCamera(false);
      toast.success('Cameras configured successfully');
    } catch (error) {
      console.error('Error configuring cameras:', error);
      toast.error('Error configuring cameras: ' + error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <div className="">
      <Navbar back={"Go back to Dashboard"} />

      <div className="mx-auto pt-[2rem] max-w-[50vw] w-full md:p-5 h-[80vh] md:w-fit flex flex-col ">
        {isCamera ? (
          <div>
            <div className="flex mt-[1rem] items-center md:w-[600px] justify-between gap-6">
              <h1 className="font-medium text-[30px] md:text-3xl font-inter">
                <span className="md:border-b-[7px] md:border-[#70E000] mx-1">Set</span>
                Up Camera
              </h1>
              <h3 className="text-[#CCCCCC] hidden md:block text-[20px] md:text-3xl font-poppins font-[400px] leading-[54px] pt-5">
                Set Up animal type
              </h3>
            </div>

            <form className="text-black flex flex-col gap-[2rem]">
              <div className="text-black font-medium flex flex-col gap-[1.3rem] font-poppins text-[15px] leading-[20px]">
                <select
                  className="border-b-2 w-[100%] mt-[1.8rem] focus:outline-none focus:border-b-[#70E000]"
                  onChange={(e) => setCameraNumber(e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled className="text-lg text-gray-400">
                    Amount of Camera
                  </option>
                  <option value="1" className="text-lg">1</option>
                  <option value="multiple" className="text-lg">Multiple</option>
                </select>
                <div>
                  {cameraNumber === '1' ? (
                    <div>
                      <input
                        className="border-b-2 py-2 focus:outline-none focus:border-b-[#70E000] w-[100%] border-b-[#4D4D4D]"
                        placeholder="IP address (Camera 1)"
                        type="text"
                        onChange={(e) => setCameraIpAddress([{ value: e.target.value }])}
                        onCopy={(e) => {
                          e.preventDefault();
                          toast.error("You can't copy from IP address field", { duration: 1000 });
                        }}
                        onPaste={(e) => {
                          e.preventDefault();
                          toast.error("You can't paste an IP address", { duration: 1000 });
                        }}
                      />
                      {showVideoStream && cameraIpAddress[0]?.value && isValidIpAddress(cameraIpAddress[0].value) && (
                        <div className="mt-4 border rounded-lg overflow-hidden">
                          <VideoStream
                            title="Camera Preview"
                            ipAddress={cameraIpAddress[0].value}
                            animalName="default"
                            className="h-[200px]"
                          />
                        </div>
                      )}
                    </div>
                  ) : cameraNumber === 'multiple' ? (
                    <>
                      {Array(ipAddressFill).fill().map((_, index) => (
                        <div key={index}>
                          <input
                            onInput={(e) => handleInput(index, e.target.value)}
                            className="border-b-2 py-2 focus:outline-none focus:border-b-[#70E000] w-[100%] border-b-[#4D4D4D]"
                            placeholder={`IP address (Camera ${index + 1})`}
                            onChange={(e) => {
                              const newValue = e.target.value;
                              setCameraIpAddress(prevState => {
                                const updatedArray = [...prevState];
                                updatedArray[index] = { value: newValue };
                                return updatedArray;
                              });
                              handleInputIpAddress();
                            }}
                            onCopy={(e) => {
                              e.preventDefault();
                              toast.error("You can't copy from IP address field", { duration: 1000 });
                            }}
                            type="text"
                            name={`id${index + 1}`}
                            onPaste={(e) => {
                              e.preventDefault();
                              toast.error("You can't paste an IP address", { duration: 1000 });
                            }}
                          />
                          {cameraIpAddress[index]?.value && isValidIpAddress(cameraIpAddress[index].value) && (
                            <div className="mt-4 border rounded-lg overflow-hidden">
                              <VideoStream
                                title={`Camera ${index + 1} Preview`}
                                ipAddress={cameraIpAddress[index].value}
                                animalName="default"
                                className="h-[200px]"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </>
                  ) : null}
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={cameraHandler}
                  className="text-[#FFFFFF] w-full text-center font-poppins font-medium border md:w-[80px] border-[#70E000] hover:bg-white hover:drop-shadow-[0_5px_10px_#70e000] hover:shadow-[#70e000]/70 hover:border-none hover:text-[#70e000] rounded bg-[#70E000]"
                >
                  Next
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            {/* Animal type setup section */}
            <div className="flex md:w-[600px] justify-between items-center gap-6">
              <h3 className="text-[#CCCCCC] md:block hidden text-[20px] md:text-3xl font-poppings font-[400px] leading-[54px] pt-5">
                Set Up Camera
              </h3>
              <h1 className="text-[30px] font-medium md:text-3xl font-inter leading-[53.09px]">
                <span className="md:border-b-[7px] md:border-[#70E000] mx-1">Set</span>
                Up Animal Type
              </h1>
            </div>

            {previewStream && (
              <>
                <div className="mb-6 border rounded-lg overflow-hidden">
                  <VideoStream
                    title="Camera Preview"
                    ipAddress={previewStream}
                    animalName="default"
                    className="h-[200px]"
                  />
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                  <h2 className="text-xl font-semibold mb-4">Animal Statistics</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="stat-item">
                      <p className="text-gray-600">Threat State:</p>
                      <p className="font-medium">{animalStats.threatState}</p>
                    </div>
                    <div className="stat-item">
                      <p className="text-gray-600">Animal Count:</p>
                      <p className="font-medium">{animalStats.animalNumber}</p>
                    </div>
                    <div className="stat-item">
                      <p className="text-gray-600">Animal Attacks:</p>
                      <p className="font-medium">{animalStats.animalAttacks}</p>
                    </div>
                    <div className="stat-item">
                      <p className="text-gray-600">Healthy Animals:</p>
                      <p className="font-medium">{animalStats.healthyAnimals}</p>
                    </div>
                    <div className="stat-item">
                      <p className="text-gray-600">Feeding Animals:</p>
                      <p className="font-medium">{animalStats.feedingAnimals}</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            <form className="flex flex-col gap-[2rem]" onSubmit={handleSubmit}>
              <div className="text-black gap-[1.3rem] flex flex-col font-poppins text-[15px] leading-[20px]">
                <div className="border-b-2 mt-[1.8rem] w-[100%] border-b-[#4D4D4D]">
                  <select
                    className="w-full focus:outline-none py-2"
                    onChange={(e) => setAnimalType(parseInt(e.target.value))}
                    defaultValue=""
                  >
                    <option value="" disabled>Select Animal Type</option>
                    <option value="1">Chicken</option>
                    <option value="2">Cow</option>
                    <option value="3">Pig</option>
                    <option value="4">Sheep</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  className={`${styles.DoneBtn} hover:bg-white w-full md:w-[80px] hover:drop-shadow-[0_5px_10px_#70e000] font-medium text-sm hover:text-[#70e000]`}
                  onClick={() => setIsOpen(true)}
                >
                  Done
                </button>
                {isOpen && (
                  <Modal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    text="Your Farm is set!"
                    buttonText="Go to Dashboard"
                    dashboard
                  />
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Camera;
