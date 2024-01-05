// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
// import { FaBell } from "react-icons/fa6";
import logo from "../../../assets/Images/Logo.svg";

// eslint-disable-next-line react/prop-types
function Navbar({ toggle, text, Bell, back }) {
  return (
    <div className="sticky top-0 bg-white">
      <nav className="shadow-md p-4 sm:px-8 flex justify-between items-center border-blue-50">
          <Link to="/">
            <img src={logo} className="w-[6rem] -ml-[1rem] sm:ml-0 mr-auto" alt="DalensAI" />
          </Link>
        <div className="flex ml-auto gap-[1rem]">
          <Link to="/notifications" className="text-xl text-black pt-2">{Bell}</Link>
          {text && (
            <Link to="/profile" className="bg-[#A3FF47] rounded-full p-[0.55rem] w-[2.5rem] h-[2.5rem] text-[#01A9F2]">
              {text}
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
