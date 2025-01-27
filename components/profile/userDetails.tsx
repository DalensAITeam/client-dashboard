"use client";

import { faker } from "@faker-js/faker";
import clsx from "clsx";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const FIRST_NAME = faker.person.firstName();
const LAST_NAME = faker.person.lastName();
const EMAIL = faker.person.lastName();

function UserDetails() {
  const [isEmailInputDisabled, setIsEmailInputDisabled] = useState(true);
  const [isNameInputDisabled, setIsNameInputDisabled] = useState(true);
  const [isPhoneInputDisabled, setIsPhoneInputDisabled] = useState(true);
  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Container for each IP address input with flex column layout, vertical gap, and full width */}
      <div className="flex flex-col gap-2 w-full">
        {/* Label for IP address (Camera 1) */}
        <label className="font-poppins text-base font-normal text-gray-700">
          Full Name
        </label>
        <div>
          <div className="relative flex items-center w-full">
            {/* Input for IP address (Camera 2) with specified styling */}
            <input
              className={`flex w-full h-12 bg-transparent border-2 ${
                isNameInputDisabled
                  ? ""
                  : "outline outline-green-500 text-black-500 focus:outline-green-500"
              } border-grey-500 p-5 rounded-md font-poppins text-base font-semibold leading-8 text-left text-gray-500`}
              type="text"
              placeholder={clsx(FIRST_NAME, LAST_NAME)}
              disabled={isNameInputDisabled}
            />
            <FaEdit
              className="absolute right-4 w-6 h-6 text-green-500  cursor-pointer"
              onClick={() => {
                setIsNameInputDisabled(!isNameInputDisabled);
              }}
            />
          </div>
          {/* Text for the "Save Changes" button */}
          {/* <div className="bg-gradient-to-r from-[#70e000] to-[#70e000] flex justify-center items-center rounded-br-[10px] rounded-bl-[10px] h-10 w-full font-poppins text-base font-semibold text-white">
              Name changed Successfully
          </div> */}
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        {/* Label for IP address (Camera 1) */}
        <label className="font-poppins text-base font-normal text-gray-700">
          Email
        </label>

        <div className="relative flex items-center w-full">
          {/* Input for IP address (Camera 2) with specified styling */}
          <input
            className={clsx(
              "flex w-full h-12 bg-transparent border-2 border-grey-500 p-5 rounded-md font-poppins text-base font-semibold leading-8 text-left text-gray-500",
              isEmailInputDisabled &&
                "outline outline-green-500 text-black-500 focus:outline-green-500"
            )}
            type="email"
            placeholder={EMAIL}
            disabled={isEmailInputDisabled}
          />
          <FaEdit
            className="absolute right-4 w-6 h-6 text-green-500  cursor-pointer"
            onClick={() => {
              setIsEmailInputDisabled(!isEmailInputDisabled);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {/* Label for IP address (Camera 1) */}
        <label className="font-poppins text-base font-normal text-gray-700">
          Mobile Number
        </label>

        <div className="relative flex items-center w-full">
          {/* Input for IP address (Camera 2) with specified styling */}
          <input
            className={`flex w-full h-12 bg-transparent border-2 ${
              isPhoneInputDisabled
                ? ""
                : "outline outline-green-500 text-black-500 focus:outline-green-500"
            } border-grey-500 p-5 rounded-md font-poppins text-base font-semibold leading-8 text-left text-gray-500`}
            type="number"
            placeholder="+234"
            disabled={isPhoneInputDisabled}
          />
          <FaEdit
            className="absolute right-4 w-6 h-6 text-green-500  cursor-pointer"
            onClick={() => {
              setIsPhoneInputDisabled(!isPhoneInputDisabled);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
