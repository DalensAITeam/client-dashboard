import React from "react";
import SettingSideBar from "../../component/settingSideBar/settingSideBar";
import { Outlet } from "react-router-dom";

function CameraContainer() {
  return (
    <div className="flex flex-row w-full h-[94vh] overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col flex-0.5">
        <SettingSideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 border-l flex flex-col border-gray-300 h-full overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
}

export default CameraContainer;
