//This was a typescript code i converted to jsx
//From a similar project of mine
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";

const SideNav = () => {
  const [sideNavFull, setSideNavFull] = useState(false);
  const handleSideNavClicked = () => {
    setSideNavFull(!sideNavFull);
  };
  return (
    <div className={`h-screen flex-none ${sideNavFull && "w-32"}`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div
          className={`p-4 pb-2 flex justify-between items-center ${
            sideNavFull && " self-center"
          } `}
        >
          {!showNavFull && (
            <Link to="/">
              <img src={logo} className="" alt="Bliks Logo" />
            </Link>
          )}
          <button className="p-1.5 rounded-lg bg-blue-50 hover:bg-blue-100">
            {sideNavFull ? (
              <AiOutlineRightCircle onClick={handleSideNavClicked} />
            ) : (
              <AiOutlineLeftCircle onClick={handleSideNavClicked} />
            )}
          </button>
        </div>

        <ul className="flex-1 mt-4 px-3">{children}</ul>

        <div
          className={`border-t justify-between flex items-center p-3 ${
            sideNavFull && "flex justify-center items-center"
          }`}
        >
          {!sideNavFull && (
            <div className="flex items-center gap-3">
              <img
                src={react}
                className="w-10 h-10 rounded-md"
                alt="The users image or avatar"
              />
              <div className={`flex justify-between  flex-col w-52 ml-3`}>
                <h4 className="font-semibold">David Hype</h4>
                <span className="text-xs text-gray-600">
                  iamsocialhype@gmail.com
                </span>
              </div>
            </div>
          )}

          <IoLogOut
            className={`cursor-pointer ${
              sideNavFull && "flex justify-between items-center self-center"
            }`}
          />
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
