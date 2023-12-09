import React, { useState } from "react";
import Switch from "../assets/components/switch";


function Notification() {
    return (
        <div>
            <div className="text-zinc-900 text-[40px] font-medium font-['Inter']">Notifications</div>


            <div className="w-[750px] h-[81px] p-6 bg-white shadow justify-center items-center gap-[396px] inline-flex border-solid border-2 mb-5">
                <div className="text-neutral-800 text-[22px] font-normal font-['Poppins']">Animals Health Status</div>
                <div className="justify-start items-center inline-flex">
                    <Switch />
                </div>
            </div>

            <div className="w-[750px] h-[81px] p-6 bg-white shadow justify-center items-center gap-[475px] inline-flex border-solid border-2 mb-5">
                <div className="text-neutral-800 text-[22px] font-normal font-['Poppins']">Feeding Status</div>
                <div className="justify-start items-center inline-flex">
                    <Switch />
                </div>
            </div>

            <div className="w-[750px] h-[81px] p-6 bg-white shadow justify-center items-center gap-[476px] inline-flex border-solid border-2 mb-5">
                <div className="text-neutral-800 text-[22px] font-normal font-['Poppins']">Feeding Alarm</div>
                <div className="justify-start items-center inline-flex">
                    <Switch />
                </div>
            </div>

            <div className="w-[750px] h-[81px] p-6 bg-white shadow justify-center items-center gap-[478px] inline-flex border-solid border-2">
                <div className="text-neutral-800 text-[22px] font-normal font-['Poppins']">Feeding Alarm</div>
                <div className="justify-start items-center inline-flex">
                    <Switch />
                </div>
            </div>
        </div>
    )
}

export default Notification