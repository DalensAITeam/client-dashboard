// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";

function Camera() {
  return (
    <div className="flex flex-col gap-12">
      <Navbar back={"Go back to Dashboard"} />

      <div className="mx-auto w-fit pt-5 ">
        <div className="flex items-center gap-6">
          <h1 className="font-[500px] text-[30px]  font-inter leading-[53.09px]">
            <span className="border-b-[7px] border-[#70E000] mx-1 ">Set</span>
            Up Camera
          </h1>
          <h3 className="text-[#CCCCCC]  text-[20px] font-poppins font-[400px] leading-[54px] pt-5 ">
            Set Up animal type
          </h3>
        </div>

        <form>
          <div className="text-[#CCCCCC] font-poppins text-[15px] leading-[20px] pt-10">
            <select
              name=""
              id=""
              className="border-b-2 w-[100%] border-b-[#70E000]"
            >
              <option value=""> Amount of Camera</option>
              <option
                value=""
                className="font-poppins text-[22px] leading-[33px] font-[400px] text-[#333333] w-"
              >
                {" "}
                1
              </option>
              <option value=""> 2</option>
              <option value=""> 3</option>
              <option value=""> 4</option>
              <option value=""> 5</option>
              <option value=""> 6</option>
              <option value=""> 7</option>
              <option value=""> 8</option>
              <option value=""> 9</option>
              <option value=""> 10</option>
            </select>{" "}
            <br /> <br />
            <div>
              <input
                className="border-b-2 w-[100%] border-b-[#4D4D4D]"
                placeholder="Ip address(Camera1)"
                type="ip address"
                name="id="
              />{" "}
              <br />
              <br />
            </div>
            <div>
              <input
                className="border-b-2 w-[100%] border-b-[#4D4D4D]"
                placeholder="Ip address(Camera2)"
                type="ip address"
                name="id="
              />{" "}
              <br />
              <br />
            </div>
            <div>
              <input
                className="border-b-2 w-[100%] border-b-[#4D4D4D]"
                placeholder="Ip address(Camera3)"
                type="ip address"
                name="id="
              />{" "}
              <br />
              <br />
            </div>
          </div>

          <div className="flex justify-center py-[45px]">
            <Link
              to={"/camera2"}
              className="text-[#FFFFFF] text-center py-2 font-poppins font-medium border w-[80px] h-[fit] border-[#70E000] rounded bg-[#70E000] Radius-[5px]"
            >
              LInk
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Camera;
