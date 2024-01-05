import React, { useState } from "react";
import Switch from "../assets/components/switch";

function Notification() {
  const [isOff, setIsOff] = useState(false);

  return (
    <div className="p-10 flex flex-col gap-5">
      <div className="text-zinc-900 text-xl font-medium font-['Inter']">
        Notifications
      </div>

      <div className="w-full md:w-3/4  p-4 bg-white shadow justify-between items-center flex border-solid border-2 ">
        <div className="text-neutral-800 text-lg font-normal font-['Poppins']">
          Animals Health Status
        </div>
        <div className="justify-start items-center inline-flex">
          <Switch />
        </div>
      </div>

      <div className="w-full md:w-3/4 p-4 bg-white shadow justify-between items-center  inline-flex border-solid border-2 ">
        <div className="text-neutral-800 text-lg font-normal font-['Poppins']">
          Feeding Status
        </div>
        <div className="justify-start items-center inline-flex">
          <Switch />
        </div>
      </div>

      <div className="w-full md:w-3/4 p-4 bg-white shadow justify-between items-center inline-flex border-solid border-2 ">
        <div className="text-neutral-800 text-lg font-normal font-['Poppins']">
          Feeding Alarm
        </div>
        <div className="justify-start items-center inline-flex">
          <Switch />
        </div>
      </div>

      <div className="w-full md:w-3/4  p-4 bg-white shadow justify-between items-center inline-flex border-solid border-2">
        <div className="text-neutral-800 text-lg font-normal font-['Poppins']">
          Feeding Alarm
        </div>
        <div className="justify-start items-center inline-flex">
          <Switch />
        </div>
      </div>
    </div>
  );
}

export default Notification;
