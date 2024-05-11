// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import CustomDropdown from "../../dropdownComponent/dropdown";
import styles from "../../modalComponent/Modal.module.css";
import Modal from "../../modalComponent/modal";
import { setIpAddress } from "../../../Redux/ActionSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function Camera() {
  const [isCamera, setIsCamera] = useState(true);
  const [cameraNumber, setCameraNumber] = useState();
  const [ipAddressFill, setIpAddressFill] = useState(1);
  const [animalType, setAnimalType] = useState(0)
  const [camera,setCamera]=useState('')
  const [cameraIpAddress, setCameraIpAddress] = useState([{ value: '' }]);

  const dispatch = useDispatch()
  
  const handleInputIpAddress = () => {
    const lastInput = cameraIpAddress[cameraIpAddress.length - 1];
  
    // Check if the last input has a value and it's not empty
    if (lastInput && lastInput.value && lastInput.value.trim() !== '') {
      // Add a new empty object to the cameraIpAddress array
      setCameraIpAddress(prevState => [...prevState, {}]);   
    }
  };


  const handleInput = (index, value) => {
    const newLength = value.length;

    if (newLength === 1 && ipAddressFill < index + 1) {
      setIpAddressFill(index + 1);
    } else if (newLength === 0 && ipAddressFill > 0) {
      setIpAddressFill(ipAddressFill - 1);
    }
  };
  const handleInputAnimal = (index, value) => {
    const newLength = value.length;
    if (newLength === 1 && animalType < index + 1) {
      setAnimalType(index + 1);
    } else if (newLength === 0 && animalType > 0) {
      setAnimalType(animalType - 1);
    }
  }

  const cameraHandler = () => {
    // Collect all IP addresses from the cameraIpAddress state array
    const ipAddresses = cameraIpAddress.map((input) => {
      const trimmedValue = input.value ? input.value.trim() : ''; // Check for null/undefined value
      return trimmedValue;
    });
  
    // Filter out any empty or invalid IP addresses
    const validIpAddresses = ipAddresses.filter((ip) => isValidIpAddress(ip));
  
    if (validIpAddresses.length === 0) {
      alert('Please enter at least one valid IP address');
      return;
    }
    // Proceed with dispatching the IP addresses or further processing
    setIsCamera(false);
    dispatch(setIpAddress(validIpAddresses));
  };
  
  // Helper function to validate IP address format (example)
  const isValidIpAddress = (ip) => {
    // Implement your IP address validation logic here
    return /^(\d{1,3}\.){3}\d{1,3}$/.test(ip); // Example: IPv4 address validation
  };
  
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // const cameraSelectHandler = (cameraNumber) => {
  //   alert('kjj')
  // }


  return (
    <div className="">
      <Navbar back={"Go back to Dashboard"} />

      <div className="mx-auto pt-[2rem] max-w-[50vw] w-full md:p-5 h-[80vh] md:w-fit flex flex-col ">
       
        { isCamera ? 
        <div>
           <div className="flex mt-[1rem] items-center md:w-[600px] justify-between gap-6">
         <h1 className="font-medium text-[30px] md:text-3xl   font-inter">
           <span className="md:border-b-[7px] md:border-[#70E000] mx-1 ">
             Set
           </span>
           Up Camera
         </h1>
         <h3 className="text-[#CCCCCC] hidden md:block text-[20px] md:text-3xl  font-poppins font-[400px] leading-[54px] pt-5 ">
           Set Up animal type
         </h3>
       </div>
       
        <form className=" text-black   flex flex-col gap-[2rem]">
          <div className="text-black font-medium flex flex-col gap-[1.3rem] font-poppins text-[15px] leading-[20px]">
            <select  className="border-b-2 w-[100%] mt-[1.8rem] focus:outline-none focus:border-b-[#70E000]"
            onChange={(e) => setCameraNumber(e.target.value)}
            >
              <option value="" selected disabled className="text-lg text-gray-400"> Amount of Camera</option>
              <option
                value="1"
                className="text-lg"
              >
                1
              </option>
              <option value="multiple" className="text-lg">Multiple</option>
              {/* <option value=""> 3</option>
              <option value=""> 4</option>
              <option value=""> 5</option>
              <option value=""> 6</option>
              <option value=""> 7</option>
              <option value=""> 8</option>
              <option value=""> 9</option>
              <option value=""> 10</option> */}
            </select>{" "}
            <div>
            {
  cameraNumber === '1' ? (
    <input
      className="border-b-2 py-2 focus:outline-none focus:border-b-[#70E000] w-[100%] border-b-[#4D4D4D]"
      placeholder="Ip address(Camera1)"
      type="ip address"
      onChange={(e) => setCameraIpAddress([{ value: e.target.value }])}
      onCopy={(e)=>{
        e.preventDefault()
        toast.error("you can't copy from ipAdress fill",{
          duration:1000,
        })
      }}
    />
  ) : cameraNumber === 'multiple' ? (
    <>
    {Array(ipAddressFill).fill().map((_, index) => (
      <input
      key={index}
      onInput={e => handleInput(index + 1, e.target.value)}
      className="border-b-2 py-2 focus:outline-none focus:border-b-[#70E000] w-[100%] border-b-[#4D4D4D]"
      placeholder={`Ip address(Camera${index + 1})`}
      onChange={(e) => {
        const newValue = e.target.value;
        setCameraIpAddress(prevState => {
          const updatedArray = [...prevState];
          updatedArray[index] = { value: newValue }; // Update the value at the corresponding index
          return updatedArray;
        });
        handleInputIpAddress(); // Call function to potentially add a new input field
      }}
      onCopy={(e)=>{
        e.preventDefault()
        toast.error("you can't copy from ipAdress fill",{
        duration:1000,
       })
      }}
      type="ip address"
      name={`id${index + 1}`}
    />
    ))}
  </>
  ) : null
}

            </div>
          </div>

          <div className="flex justify-center">
            <Button onClick={cameraHandler}
              className="text-[#FFFFFF] w-full text-center  font-poppins font-medium border md:w-[80px]  border-[#70E000] hover:bg-white hover:drop-shadow-[0_5px_10px_#70e000] hover:shadow-[#70e000]/70 hover:border-none  hover:text-[#70e000]  rounded bg-[#70E000] "
            >
              Next
            </Button>
          </div>
        </form>
        </div> :
        <div>
            <div className="flex md:w-[600px]  justify-between items-center gap-6">
         <h3 className="text-[#CCCCCC] md:block hidden text-[20px] md:text-3xl font-poppings font-[400px] leading-[54px] pt-5">
           Set Up Camera
         </h3>
         <h1 className=" text-[30px] font-medium md:text-3xl font-inter leading-[53.09px]">
           <span className=" md:border-b-[7px] md:border-[#70E000] mx-1">
             Set
           </span>
           Up Animal Type
         </h1>
       </div>
        <form
          className="flex flex-col gap-[2rem]"
          onSubmit={handleSubmit}
        >
          <div className="text-black gap-[1.3rem] flex flex-col  font-poppins text-[15px] leading-[20px] ">
            <div className="border-b-2 mt-[1.8rem] w-[100%] border-b-[#4D4D4D]">
              {/* This was suppossed to be a drop down, uncomment this line below to debug or just use a select tag like it was used for the camera ip addresses */}
              {/* <CustomDropdown /> */}
            </div>
            <div>
              <input
              onInput={e => handleInputAnimal(0, e.target.value)}
                className="border-b-2 py-2 w-[100%] focus:outline-none border-b-[#4D4D4D]"
                placeholder="Animal to monitor with camera 1"
                type="ip address"
                name="id="
              />
            </div>
            {
              Array(animalType).fill().map((_, index) => {
                return (
                  <div key={index}>
                    <input
                      onInput={e => handleInputAnimal(index + 1, e.target.value)}
                      className="border-b-2 py-2 w-[100%] focus:outline-none border-b-[#4D4D4D]"
                      placeholder={`Animal to monitor with camera ${index + 2} `}
                      type="ip address"
                      name="id="
                    />
                  </div>
                );
              })
            }
          </div>

          <div className="flex justify-center  ">
            <button
              className={`${styles.DoneBtn} hover:bg-white w-full md:w-[80px] hover:drop-shadow-[0_5px_10px_#70e000]  font-medium text-sm   hover:text-[#70e000] `}
              onClick={() => setIsOpen(true)}
            >
              Done
            </button>
            {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} text='Your Farm is set!' buttonText='Go to Dashboard' dashboard/>}
          </div>
        </form>
        </div>
       }
        
      </div>
    </div>
  );
}

export default Camera;
