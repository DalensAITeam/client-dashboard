import React from 'react'

function History() {
    return (

        <div>
            <div class="text-zinc-900 text-[40px] font-medium font-['Inter']">Manage History</div>
            <div class="text-stone-300 text-base font-normal font-['Poppins']">Data activities in Data history will be cleared automatically. Please select suitable clearing time </div>

            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <g clip-path="url(#clip0_2062_3066)">
                        <path d="M6 19.5C6 20.6 6.9 21.5 8 21.5H16C17.1 21.5 18 20.6 18 19.5V7.5H6V19.5ZM19 4.5H15.5L14.5 3.5H9.5L8.5 4.5H5V6.5H19V4.5Z" fill="#091E42" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2062_3066">
                            <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                    </defs>
                </svg>

                <p class="text-neutral-600 text-lg font-normal font-['Poppins']">Auto-delete</p>
            </button>
            <div class="w-[129px] h-10 px-4 py-2 bg-white border border-lime-500 flex-col justify-start items-start inline-flex">
                <select name="" id="">
                    <option class="text-stone-900 text-base font-normal font-['Poppins']">Yearly</option>
                    <option value="monthly">Monthly</option>
                    <option value="weekly">Weekly</option>
                    <option value="dayly">Dayly</option>
                </select>
            </div>
            <div class="w-[129px] h-10 px-4 py-2 bg-white border border-lime-500 flex-col justify-start items-start inline-flex">
  <div class="justify-start items-center gap-8 inline-flex">
    <div class="text-stone-900 text-base font-normal font-['Poppins']">Yearly</div>
  </div>
</div>




            <div class="w-[783px] h-[527px] relative border border-lime-500">
                <div class="left-[32px] top-[16px] absolute text-neutral-600 text-base font-normal font-['Poppins']">History </div>
                <div class="w-[417px] left-[32px] top-[48px] absolute text-stone-300 text-[11px] font-normal font-['Inter']">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</div>
                <div class="left-[652px] top-[25px] absolute justify-start items-center gap-2 inline-flex">
                    <div class="text-lime-500 text-xs font-medium font-['Poppins']">Select all</div>
                </div>
            </div>
            <div class="w-[141px] h-[27px] justify-start items-center gap-2 inline-flex">
                <div class="w-6 h-6 relative"></div>
            </div>
        </div>

    )
}

export default History