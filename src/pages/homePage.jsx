import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../LayOut/SideNav";
import Header from "../LayOut/Header";
import { useSelector } from "react-redux";

function HomeScreen() {
  const openSideNav = useSelector((state) => state.actions.openSideNav);

  return (
    <div className=" w-full">
      <SideNav activeSettings />
      {/* <div className="flex flex-col w-30  bg-gray-500">Side Bar</div> */}
      <div
        // className="flex py-3 px-3 flex-col w-full flex-1"
        className={`${
          !openSideNav ? "w-[calc(100% - 100px)] md:ml-[100px]" : " w-full"
        } duration-300 flex py-3 px-3 flex-col  flex-1`}
      >
        <Header />
        {/* <div className="h-10 bg-gray-500">Navigation Bar</div> */}
        <div className="flex flex-col gap-10 w-full transition duration-300 ease">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
