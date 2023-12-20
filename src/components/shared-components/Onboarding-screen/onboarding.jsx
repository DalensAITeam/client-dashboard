import React from "react";
import "./onboarding.css";
import Navbar from "../navbar/navbar";
import { FaBell } from "react-icons/fa6";
// import { FaHamburger } from "react-icons/gi";
import { HiMenu } from "react-icons/hi";
function Onboarding() {
  return (
    <div>
      <Navbar
        Bell={<FaBell />}
        toggle={<HiMenu/>}
        text={"HF"}
      />
    
    </div>
  );
}

export default Onboarding;
