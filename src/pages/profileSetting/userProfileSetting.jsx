import React from "react";
import UserProfileDetailsSection from "../../component/profileComponent/userProfileDetails";
import { FaArrowLeft, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function UserProfileSetting() {
  const navigator = useNavigate();
  function onGoToSettingHomePageFn() {
    navigator("/");
  }
  return (
    <div className="flex flex-col items-start gap-5 w-full p-3 ">
      <h2 className="  flex flex-row items-center font-inter text-2xl gap-5 font-semibold text-gray-800">
        <FaArrowLeft
          className=" flex md:hidden w-17 h-5 cursor-pointer"
          onClick={onGoToSettingHomePageFn}
        />
        Profile Settings
      </h2>
      <div className="flex flex-row items-center sm:justify-between justify-center gap-5 w-full shadow-md p-5">
        <div className="flex sm:flex-row flex-col justify-center gap-5">
          <div >
            <FaEdit className="absolute right-[-20px] top-[-10px] w-6 h-6 text-green-500 cursor-pointer sm:hidden" />
            <img  src={""} 
                  alt="HF" 
                  className="w-32 h-32 rounded-full border-4 border-green-500 flex items-center justify-center"/>
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
        <button className="hidden sm:flex items-center sm:border sm:border-gray-800 md:text-xl md:font-semibold h-10 px-3">Update photo
        </button>
      </div>
      <UserProfileDetailsSection />
    </div>
  );
}

export default UserProfileSetting;
