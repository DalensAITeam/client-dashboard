// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/NavBarWelcome";
import { FaBell } from "react-icons/fa6";
// import { FaHamburger } from "react-icons/gi";
import { HiMenu } from "react-icons/hi";
import welcomeScreenImg from "../../../assets/welcome-screen-img.png";
import { Link } from "react-router-dom";

function WelcomeScreen() {
  // Using this to check when to break text
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <div>
      <Navbar Bell={<FaBell />} toggle={<HiMenu />} text={"HF"} />

      <div className=" h-[90vh] mx-10  flex justify-center flex-col items-center">
        <div className="text-center">
          <img src={welcomeScreenImg} alt="" />
          <h2 className="font-inter mt-8 font-medium text-2xl md:text-[40px] leading-[48.41px]">
            Welcome To Dalens AI
          </h2>
          <p className="font-poppins font-[500px] text-[19px] leading-[28.5px]">
            To start setting up your farm,
            {windowWidth <= 774 && <br />} {/* Breaking Text here*/}
            <Link to={"/setup"} className="text-[#70E000]">
              Click here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
