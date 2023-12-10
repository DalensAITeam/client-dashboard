// eslint-disable-next-line no-unused-vars
import React from "react";

import Navbar from "../navbar/navbar";

import CustomDropdown from "../../dropdownComponent/dropdown";
import { useState } from "react";
import styles from "../../modalComponent/Modal.module.css";
import Modal from "../../modalComponent/modal";

function Camera2() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col">
      <Navbar back={"Go back to Dashboard"} />

      <div className="mx-auto w-full md:w-fit h-full px-3 pt-10">
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
          className="w-full flex flex-col h-[75vh] px-3 justify-between md:justify-normal"
          onSubmit={handleSubmit}
        >
          <div className="text-black h-3/5 flex flex-col justify-between  font-poppins text-[15px] leading-[20px] pt-10">
            <div className="border-b-2 w-[100%] border-b-[#4D4D4D]">
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

          <div className="flex justify-center  py-[45px] md:self-center self-end">
            <button
              className={`${styles.DoneBtn} hover:bg-white hover:drop-shadow-[0_5px_10px_#70e000]  font-medium text-sm   hover:text-[#70e000] `}
              onClick={() => setIsOpen(true)}
            >
              Done
            </button>
            {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Camera2;
