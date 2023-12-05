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
    <div className="flex flex-col gap-10">
      <Navbar back={"Go back to Dashboard"} />

      <div className="mx-auto w-fit pt-10">
        <div className="flex items-center gap-6">
          <h3 className="text-[#CCCCCC] text-[20px] font-poppings font-[400px] leading-[54px] pt-5">
            Set Up Camera
          </h3>
          <h1 className="font-[500px] text-[30px] font-inter leading-[53.09px]">
            <span className="border-b-[7px] border-[#70E000] mx-1">Set</span>
            Up Animal Type
          </h1>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="text-[#CCCCCC] font-poppins text-[15px] leading-[20px] pt-10">
            <div className="border-b-2 w-[100%] border-b-[#4D4D4D]">
              <CustomDropdown className />
            </div>{" "}
            <br />
            <div>
              <input
                className="border-b-2 w-[100%] border-b-[#4D4D4D]"
                placeholder="Animal to monitor with camera 1"
                type="ip address"
                name="id="
              />{" "}
              <br />
              <br />
            </div>
            <div>
              <input
                className="border-b-2 w-[100%] border-b-[#4D4D4D]"
                placeholder="Animal to monitor with camera 2"
                type="ip address"
                name="id="
              />{" "}
              <br />
              <br />
            </div>
            <div>
              <input
                className="border-b-2 w-[100%] border-b-[#4D4D4D]"
                placeholder="Animal to monitor with camera 3"
                type="ip address"
                name="id="
              />{" "}
              <br />
              <br />
            </div>
          </div>

          <div className="flex justify-center py-[45px]">
            <button className={styles.DoneBtn} onClick={() => setIsOpen(true)}>
              Done
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Camera2;
