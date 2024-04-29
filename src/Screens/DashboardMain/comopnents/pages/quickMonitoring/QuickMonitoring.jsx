import "./monitoring.css";
import { useEffect, useState } from "react";

const QuickMonitoring = () => {
  const imageUrl = '/model/detect/Chicken/10.215.164.190'
  const[imageVideo, setImageVideo]= useState()
  useEffect(()=>{
    setImageVideo(imageUrl)
  },[imageUrl])
  return (
    <>
      <div className="flex flex-col flex-wrap flex-1 w-full  h-fit justify-between ">
        <div className="flex justify-between w-full md:w-4/5">
          <h1 className="text-lg py-4 font-medium">Quick Monitoring</h1>
          <button className="text-sm text-green-400 cursor-pointer">
            See more
          </button>
        </div>

        <img src={imageVideo?imageVideo:"/screen.png"} alt="camer-1" />
      </div>
    </>
  );
};

export default QuickMonitoring;
