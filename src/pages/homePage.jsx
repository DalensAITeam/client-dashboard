import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../LayOut/SideNav";

function HomeScreen() {
  return (
    <div className="flex flex-row w-full">
      <SideNav/>
      <div className="flex flex-col w-30  bg-gray-500">Side Bar</div>
      <div className="flex flex-col w-full flex-1">
        <div className="h-10 bg-gray-500">Navigation Bar</div>
        <div className="flex flex-col gap-10 w-full transition duration-300 ease">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
