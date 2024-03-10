// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../../../src/components/modalComponent/Modal.module.css";
import successfulScreenImg from "../../assets/successful-screen-Img.png";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "animate.css";
// eslint-disable-next-line react/prop-types
const Modal = ({ setIsOpen, text, buttonText, dashboard }) => {
  return (
    <>
      <div
        className="bg-slate-900/30 w-screen h-screen  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute -z-0 "
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed animate__animated animate__zoomIn top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-[85vw] h-[65vh] md:w-[50vw] bg-white flex flex-col justify-center text-white z-20 rounded-xl shadow-md">
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-6px" }} />
          </button>
          <div className={`w-1/3 md:w-1/6 animate-bounce mx-auto`}>
            <img src={successfulScreenImg} alt="" />
          </div>
          <br />
          <div className="flex justify-center font-medium text-2xl font-inter text-[#1a1a1a] leading-48.41">
            <h2>{text}</h2>
          </div>
          <div className=" w-full">
            <div className="flex justify-around mt-5 items-center ">
              {buttonText &&<Link
                to={dashboard&& "/dashboard"}
                className=" font-medium border hover:bg-white hover:text-[#70e000]  bg-[#70e000] p-2 rounded-md text-xl text-white  transition-all duration-250 ease"
                onClick={() => setIsOpen(false)}
              >
                {buttonText}
              </Link>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
