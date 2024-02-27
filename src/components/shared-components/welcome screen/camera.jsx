// eslint-disable-next-line no-unused-vars
import React,{ useState } from "react";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Camera() {

  const[formData,setFormData] = useState({})

  const handleChange = (e) => {
    setFormData(prevState => ({...prevState,[e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
     await axios.post('http://localhost:8000/setup-camera',formData,{
        headers: {
          'Content-Type':'application/json',
        }
      }
      )
    }
    catch(e){
      console.error(e)
    }
  }

  
  return (
    <div className="flex flex-col gap-12">
      <Navbar back={"Go back to Dashboard"} />

      <div className="mx-auto w-full p-5 h-[80vh] md:w-fit flex flex-col  pt-5 ">
        <div className="flex items-center md:w-[600px] justify-between gap-6">
          <h1 className="font-medium text-[30px] md:text-3xl   font-inter">
            <span className="md:border-b-[7px] md:border-[#70E000] mx-1 ">
              Set
            </span>
            Up Camera
          </h1>
          <h3 className="text-[#CCCCCC] hidden md:block text-[20px] md:text-3xl  font-poppins font-[400px] leading-[54px] pt-5 ">
            Set Up animal type
          </h3>
        </div>
        <form method='post' className="h-[75vh] text-black   flex flex-col justify-between md:justify-normal" onSubmit={handleSubmit}>
        <div className="text-black font-medium flex flex-col h-3/5 justify-evenly font-poppins text-[15px] leading-[20px]">
            <select name="amount_of_cameras" className="border-b-2 w-[100%] focus:outline-none focus:border-b-[#70E000]" onChange={handleChange}>
              <option> Amount of Camera</option>
              <option
                value="1"
                className="font-poppins text-[22px] leading-[33px] font-[400px] text-[#333333] w-"
              >
                1
              </option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
              <option value="5"> 5</option>
              <option value="6"> 6</option>
              <option value="7"> 7</option>
              <option value="8"> 8</option>
              <option value="9"> 9</option>
              <option value="10"> 10</option>
            </select>{" "}
            <div>
              <input
                className="border-b-2 py-2 focus:outline-none focus:border-b-[#70E000] w-[100%] border-b-[#4D4D4D]"
                placeholder="Ip address(Camera1)"
                type="ip address"
                name="ip_address_1"
                onChange={handleChange}
              />{" "}
            </div>
            <div>
              <input
                className="border-b-2 w-[100%] py-2 focus:border-b-[#70E000] focus:outline-none border-b-[#4D4D4D]"
                placeholder="Ip address(Camera2)"
                type="ip address"
                name="ip_address_2"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="border-b-2 py-2 focus:border-b-[#70E000] w-[100%] focus:outline-none border-b-[#4D4D4D]"
                placeholder="Ip address(Camera3)"
                type="ip address"
                name="ip_address_3"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-center">
           <Link
           to={"/setup-animal"}
           className="text-[#FFFFFF] w-full text-center py-2 font-poppins font-medium border md:w-[80px] h-[fit] border-[#70E000] hover:bg-white hover:drop-shadow-[0_5px_10px_#70e000] hover:shadow-[#70e000]/70 hover:border-none  hover:text-[#70e000]  rounded bg-[#70E000] Radius-[5px]"
           >
           Next
           </Link>
           </div>
        </form>
      </div>
    </div>
  );
}

export default Camera;
