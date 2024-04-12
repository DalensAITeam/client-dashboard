import React from "react";
import { MdAccountBox, MdCreditCard } from "react-icons/md";
import { HiCamera } from "react-icons/hi2";
import { FaVolumeUp, FaEdit } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function SettingDashBoard() {
  const navigate = useNavigate();

  const {email, first_name } = useSelector((state) => state.userdata || {});
  const renderSettingCard = (title, description, icon) => (
    <div
      onClick={() => navigate(`/settings/${title}`)}
      // onClick={() =>
      //   title === "Profile"
      //     ? navigate(`/settings`)
      //     : navigate(`/settings/${title}`)
      // }
      className="shadow-md rounded-lg p-10 flex flex-col items-start justify-center gap-3 cursor-pointer"
    >
      <div className=" text-green-500">{icon}</div>
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
           {`Welcome ${first_name}`}
          </h2>
          <h6 className="font-poppins text-base font-normal text-gray-600">
            {email}
          </h6>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full">
          {renderSettingCard(
            "profile",
            "Edit personal details",
            <MdAccountBox size={30} />
          )}
          {renderSettingCard(
            "camera",
            "Edit camera setting",
            <HiCamera size={30} />
          )}
          {renderSettingCard(
            "price",
            "Checkout price details",
            <MdCreditCard size={30} />
          )}
          {renderSettingCard(
            "notifications",
            "Customize Notification to suit your needs",
            <FaVolumeUp size={30} />
          )}
          {renderSettingCard(
            "history",
            "View all history",
            <FaEdit size={30} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SettingDashBoard;
