// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../navbar/navbar";
import { FaBell } from "react-icons/fa6";
// import { FaHamburger } from "react-icons/gi";
import { HiMenu } from "react-icons/hi";
import welcomeScreenImg from "../../../assets/welcome-screen-img.png";
import { Link } from "react-router-dom";

function WelcomeScreen() {
  return (
    <div>
      <Navbar Bell={<FaBell />} toggle={<HiMenu />} text={"HF"} />

      <div className=" h-[90vh] flex justify-center flex-col items-center">
        <div className="text-center">
          <img src={welcomeScreenImg} alt="" />
          <h2 className="font-inter font-[500px] text-[40px] leading-[48.41px]">
            Welcome To Dalens AI
          </h2>
          <p className="font-poppins font-[500px] text-[19px] leading-[28.5px]">
            To start set up your farm,
            <Link to={"/camera"} className="text-[#70E000]">
              Click here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
