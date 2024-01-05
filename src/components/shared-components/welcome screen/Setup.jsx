// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import CustomDropdown from "../../dropdownComponent/dropdown";
import styles from "../../modalComponent/Modal.module.css";
import Modal from "../../modalComponent/modal";

function Camera() {
  const [isCamera, setIsCamera] = useState(true);
  const [cameraNumber, setCameraNumber] = useState('');

  const cameraHandler = () => {
    // alert('kjj')
    setIsCamera(false);
  }
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

      <div className="mx-auto pt-[2rem] w-full md:p-5 h-[80vh] md:w-fit flex flex-col ">
       
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
            <select  className="border-b-2 w-[100%] mt-[1.8rem] focus:outline-none focus:border-b-[#70E000]">
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
              <input
                className="border-b-2 py-2 focus:outline-none focus:border-b-[#70E000] w-[100%] border-b-[#4D4D4D]"
                placeholder="Ip address(Camera1)"
                type="ip address"
                name="id="
              />{" "}
            </div>
            <div>
              <input
                className="border-b-2 w-[100%] py-2 focus:border-b-[#70E000] focus:outline-none border-b-[#4D4D4D]"
                placeholder="Ip address(Camera2)"
                type="ip address"
                name="id="
              />
            </div>
            <div>
              <input
                className="border-b-2 py-2 focus:border-b-[#70E000] w-[100%] focus:outline-none border-b-[#4D4D4D]"
                placeholder="Ip address(Camera3)"
                type="ip address"
                name="id="
              />
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
              <CustomDropdown />
            </div>{" "}
            <div>
              <input
                className="border-b-2 py-2 w-[100%] focus:outline-none border-b-[#4D4D4D]"
                placeholder="Animal to monitor with camera 1"
                type="ip address"
                name="id="
              />{" "}
              {/* <br />
              <br />  I removed All br tags*/}
            </div>
            <div>
              <input
                className="border-b-2 py-2 w-[100%] focus:outline-none border-b-[#4D4D4D]"
                placeholder="Animal to monitor with camera 2"
                type="ip address"
                name="id="
              />
            </div>
            <div>
              <input
                className="border-b-2 py-2 focus:outline-none w-[100%] border-b-[#4D4D4D]"
                placeholder="Animal to monitor with camera 3"
                type="ip address"
                name="id="
              />
            </div>
          </div>

          <div className="flex justify-center  ">
            <button
              className={`${styles.DoneBtn} hover:bg-white w-full md:w-[80px] hover:drop-shadow-[0_5px_10px_#70e000]  font-medium text-sm   hover:text-[#70e000] `}
              onClick={() => setIsOpen(true)}
            >
              Done
            </button>
            {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
          </div>
        </form>
        </div>
       }
        
      </div>
    </div>
  );
}

export default Camera;