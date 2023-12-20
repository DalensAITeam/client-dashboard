// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
// import { FaBell } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
function Navbar({ toggle, text, Bell, back }) {
  return (
    <div className="sticky top-0 bg-white">
      <nav className="shadow-lg p-4 px-8 flex justify-between items-center border-blue-50">
        <div>
          {toggle}
          {back && (
            <Link
              to={"/"}
              className="border border-[#A3FF47] py-1 px-2 text-[#70E000] "
            >
              <button>{back}</button>{" "}
            </Link>
          )}
        </div>
        <div className="flex items-center gap-7">
          {Bell}
          {text && (
            <span className="bg-[#A3FF47] rounded-full py-1 px-2 text-[#01A9F2]">
              {text}
            </span>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
