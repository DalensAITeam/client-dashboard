import React from "react";
import { MdContacts, MdCameraAlt, MdCreditCard } from "react-icons/md";
import { FaVolumeUp, FaEdit } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

function SettingDashBoard() {
  const navigate = useNavigate();

  const renderSettingCard = (title, description, icon) => (
    <div
      onClick={() =>
        title === "Profile"
          ? navigate(`/setting`)
          : navigate(`/setting/${title}`)
      }
      className="w-90 h-52 shadow-md rounded-lg p-20 flex flex-col items-start justify-center cursor-pointer space-y-4"
    >
      <div className=" w-40 h-40 text-green-500">{icon}</div>
      <h4 className="font-poppins text-1x1 font-semibold text-gray-800">
        {title}
      </h4>
      <h6 className="font-poppins text-sm font-normal text-gray-400">
        {description}
      </h6>
    </div>
  );
  return (
    <div className="flex flex-col w-full p-5">
      <div className="flex flex-col gap-10 p-10-10 w-full">
        <div className="flex flex-col items-start justify-start gap-5">
          <h2 className="font-inter text-4xl font-semibold text-gray-800">
            Welcome, HF
          </h2>
          <h6 className="font-poppins text-base font-normal text-gray-600">
            Email
          </h6>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full">
          {renderSettingCard(
            "Profile",
            "Edit personal details",
            <MdContacts className="w-10 h-10" />
          )}
          {renderSettingCard(
            "Camera",
            "Edit camera setting",
            <MdCameraAlt className="w-10 h-10" />
          )}
          {renderSettingCard(
            "Price",
            "Checkout price details",
            <MdCreditCard className="w-10 h-10" />
          )}
          {renderSettingCard(
            "Notification Settings",
            "Customize Notification to suit your needs",
            <FaVolumeUp className="w-10 h-10" />
          )}
          {renderSettingCard(
            "History",
            "View all history",
            <FaEdit className="w-10 h-10" />
          )}
        </div>
      </div>
    </div>
  );
}

export default SettingDashBoard;
