import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import ActivateCamera from "./activavteCamera"; // Importing ActivateCamera component
import { FaArrowLeft, FaEdit } from "react-icons/fa";

function CameraSettings() {
  return (
    // Main container with flex column layout and padding
    <div className="flex flex-col p-10 space-y-30 gap-10 w-full ">
      {/* Heading for Camera Settings */}
      <h2 className="  flex flex-row items-center font-inter text-2xl gap-5 font-semibold text-gray-800">
        <FaArrowLeft className=" flex md:hidden w-17 h-5 cursor-pointer " />
        Camera Settings
      </h2>

      {/* Container for adding a new camera with flex layout, items alignment, and cursor-pointer */}
      <div className="flex items-center gap-20 cursor-pointer">
        {/* Subheading for Add Camera */}
        <h4 className="font-poppins text-base font-normal text-gray-800">
          Add Camera
        </h4>

        {/* Plus Square icon for adding a new camera */}
        <FaPlusSquare className="w-30 h-30 text-green-500" />
      </div>

      {/* Container for ActivateCamera component with full width */}
      <div className="flex flex-col flex-1 w-full">
        <ActivateCamera />
      </div>
    </div>
  );
}

export default CameraSettings;
