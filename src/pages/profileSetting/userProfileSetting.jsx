import React from "react";
import UserProfileDetailsSection from "../../component/profileComponent/userProfileDetails";
import { FaArrowLeft, FaEdit } from "react-icons/fa";

function UserProfileSetting() {
  return (
    <div className="flex flex-col items-start gap-5 w-full p-5">
      <h1 className=" flex flex-row items-center text-3xl font-bold dark:text-white gap-5 text-gray-800">
        <FaArrowLeft className=" flex md:hidden w-17 h-5 cursor-pointer " />
        Profile
      </h1>
      <div className="flex  flex-row align-center sm:justify-between justify-center gap-5 w-full shadow-md p-5">
        <div className="flex sm:flex-row flex-col align-center justify-center gap-5">
          <div className="relative w-32 h-32 rounded-full border-4 border-green-500 flex items-center justify-center">
            <FaEdit className="absolute right-[-20px] top-[-10px] w-6 h-6 text-green-500 cursor-pointer sm:hidden" />
            <h6>HF</h6>
          </div>
          <div className="flex flex-col align-center justify-center ">
            <h4 className="flex items-center justify-center font-poppins text-lg font-semibold text-gray-800">
              HF
            </h4>
            <h6 className=" flex items-center justify-center font-poppins text-sm font-normal text-gray-400">
              email
            </h6>
          </div>
        </div>
        <div className="hidden flex-col items-center justify-center sm:flex flex-col ">
          <h3 className="flex flex-row items-center justify-center text-xl font-semibold border border-gray-800 rounded-custom h-10 w-120 p-5 cursor-pointer font-poppins text-base font-semibold text-left">
            Update photo
          </h3>
        </div>
      </div>
      <UserProfileDetailsSection />
    </div>
  );
}

export default UserProfileSetting;
