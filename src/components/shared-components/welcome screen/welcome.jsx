import React, { useEffect, useState } from "react";
import Navbar from "../navbar/NavBarWelcome";
import { FaBell } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import welcomeScreenImg from "../../../assets/welcome-screen-img.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function WelcomeScreen() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { email, first_name } = useSelector((state) => state.userdata || {});
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, [email, navigate]);

  return (
    <div>
      <Navbar Bell={<FaBell />} toggle={<HiMenu />} text={first_name ?`${first_name[0]}${first_name[1].toUpperCase()}`: 'D'} />

      <div className="h-[90vh] mx-10 flex justify-center flex-col items-center">
        <div className="text-center">
          <img src={welcomeScreenImg} alt="Welcome" />
          <h2 className="font-inter mt-8 font-medium text-2xl md:text-[40px] leading-[48.41px]">
            Welcome To DalensAI
          </h2>
          <p className="font-poppins font-[500px] text-[19px] leading-[28.5px]">
            To start setting up your farm,
            {windowWidth <= 774 && <br />} {/* Break text if window is narrow */}
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
