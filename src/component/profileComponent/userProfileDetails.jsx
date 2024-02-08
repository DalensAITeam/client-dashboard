import React from "react";
import { FaVolumeUp, FaEdit } from "react-icons/fa";

function UserProfileDetailsSection() {
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
              className="flex w-full h-12 bg-transparent rounded-tl-[10px] rounded-tr-[10px] rounded-br-0 rounded-bl-0 border-2 focus:outline-green-500 border-grey-500 p-5  font-poppins text-base font-semibold leading-8 text-left text-gray-500"
              type="text"
              placeholder="HF"
            />
            <FaEdit className="absolute right-4 w-6 h-6 text-green-500  cursor-pointer" />
          </div>
            {/* Text for the "Save Changes" button */}
          <div className="bg-gradient-to-r from-[#70e000] to-[#70e000] flex justify-center items-center rounded-br-[10px] rounded-bl-[10px] h-10 w-full font-poppins text-base font-semibold text-white">
              Name changed Successfully
          </div>
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
            className="flex w-full h-12 bg-transparent border-2  focus:outline-green-500 border-grey-500 p-5 rounded-md font-poppins text-base font-semibold leading-8 text-left text-gray-500"
            type="email"
            placeholder="example@example.com"
          />
          <FaEdit className="absolute right-4 w-6 h-6 text-green-500  cursor-pointer" />
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
            className="flex w-full h-12 bg-transparent border-2  focus:outline-green-500 border-grey-500 p-5 rounded-md font-poppins text-base font-semibold leading-8 text-left text-gray-500"
            type="number"
            placeholder="+9991626838292"
          />
          <FaEdit className="absolute right-4 w-6 h-6 text-green-500  cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {/* Label for IP address (Camera 1) */}
        <label className="font-poppins text-base font-normal text-gray-700">
          Password
        </label>

        <div className="relative flex items-center w-full">
          {/* Input for IP address (Camera 2) with specified styling */}
          <input
            className="flex w-full h-12 bg-transparent border-2 focus:outline-green-500 border-grey-500 p-5 rounded-md font-poppins text-base font-semibold leading-8 text-left text-gray-500"
            type="password"
            placeholder="********************"
          />
          <FaEdit className="absolute right-4 w-6 h-6 text-green-500  cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default UserProfileDetailsSection;
