import React from "react";
import { FaArrowLeft, FaVolumeUp, FaEdit } from "react-icons/fa";
import { MdContacts, MdCameraAlt, MdCreditCard } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

function SettingSideBar() {
  const navigate = useNavigate();

  function onGoToSettingHomePageFn() {
    navigate("/settings");
  }

  return (
    <div className="h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={onGoToSettingHomePageFn}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors inline-flex items-center gap-2 text-gray-700"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span className="font-medium">Back</span>
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <NavLink
          to="profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-lime-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`
          }
          end
        >
          <MdContacts className="w-5 h-5" />
          <span className="font-medium">Profile</span>
        </NavLink>

        <NavLink
          to="camera"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-lime-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`
          }
          end
        >
          <MdCameraAlt className="w-5 h-5" />
          <span className="font-medium">Camera Settings</span>
        </NavLink>

        <NavLink
          to="price"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-lime-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`
          }
          end
        >
          <MdCreditCard className="w-5 h-5" />
          <span className="font-medium">Pricing</span>
        </NavLink>

        <NavLink
          to="notifications"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-lime-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`
          }
          end
        >
          <FaVolumeUp className="w-5 h-5" />
          <span className="font-medium">Notifications</span>
        </NavLink>

        <NavLink
          to="history"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-lime-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`
          }
          end
        >
          <FaEdit className="w-5 h-5" />
          <span className="font-medium">History</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default SettingSideBar;
