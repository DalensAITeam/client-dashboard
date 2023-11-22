import React from "react";
import SettingSideBar from "../../component/settingSideBar/settingSideBar";
import { Outlet } from "react-router-dom";

function CameraContainer() {
  return (
    <div className="flex flex-row w-full">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col flex-.5">
        <SettingSideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 border-l flex flex-col border-gray-300">
        <Outlet />
      </div>
    </div>
  );
}

export default CameraContainer;
