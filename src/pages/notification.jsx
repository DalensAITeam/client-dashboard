import React from 'react'

function Notification() {
    return (
        <div>
            <div className="text-zinc-900 text-[40px] font-medium font-['Inter']">Notifications</div>
            <div className="w-[750px] h-[81px] p-6 bg-white shadow justify-center items-center gap-[396px] inline-flex">
                <div className="text-neutral-800 text-[22px] font-normal font-['Poppins']">Animals Health Status</div>
                <div className="justify-start items-center inline-flex">
                    <div className="w-8 h-5 p-0.5 bg-blue-800 rounded-[120px] justify-end items-center flex">
                        <div className="w-4 h-4 bg-white rounded-[100px]"></div>
                    </div>
                    <div className="pl-2 justify-start items-start flex">
                        <div className="text-indigo-300 text-base font-normal font-['Inter'] leading-tight">ON</div>
                    </div>
                </div>
            </div>

            <div className="w-[750px] h-[81px] p-6 bg-white shadow justify-center items-center gap-[475px] inline-flex">
                <div className="text-neutral-800 text-[22px] font-normal font-['Poppins']">Feeding Status</div>
                <div className="justify-start items-center inline-flex">
                    <div className="w-8 h-5 p-0.5 bg-blue-800 rounded-[120px] justify-end items-center flex">
                        <div className="w-4 h-4 bg-white rounded-[100px]"></div>
                    </div>
                    <div className="pl-2 justify-start items-start flex">
                        <div className="text-indigo-300 text-base font-normal font-['Inter'] leading-tight">ON</div>
                    </div>
                </div>
            </div>

            <div className="w-[750px] h-[81px] p-6 bg-white shadow justify-center items-center gap-[478px] inline-flex">
                <div className="text-neutral-800 text-[22px] font-normal font-['Poppins']">Feeding Alarm</div>
                <div className="justify-start items-center inline-flex">
                    <div className="w-8 h-5 p-0.5 bg-blue-800 rounded-[120px] justify-end items-center flex">
                        <div className="w-4 h-4 bg-white rounded-[100px]"></div>
                    </div>
                    <div className="pl-2 justify-start items-start flex">
                        <div className="text-indigo-300 text-base font-normal font-['Inter'] leading-tight">ON</div>
                    </div>
                </div>
            </div>

            <div className="w-[750px] h-[81px] p-6 bg-white shadow justify-center items-center gap-[478px] inline-flex">
                <div className="text-neutral-800 text-[22px] font-normal font-['Poppins']">Feeding Alarm</div>
                <div className="justify-start items-center inline-flex">
                    <div className="w-8 h-5 p-0.5 bg-blue-800 rounded-[120px] justify-end items-center flex">
                        <div className="w-4 h-4 bg-white rounded-[100px]"></div>
                    </div>
                    <div className="pl-2 justify-start items-start flex">
                        <div className="text-indigo-300 text-base font-normal font-['Inter'] leading-tight">ON</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification