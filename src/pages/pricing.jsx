import React from 'react'

function Pricing() {
    return (
        <div >
            
            <h1 class="text-zinc-900 text-[40px] font-medium font-['Inter']">Pricing</h1>
            
            
            {/* The Regular Plan */}
            <div className='lg:flex md:flex gap-4 mb-4 sm:block sm:gap-4'>
                <div class="w-[317px] h-[708px] relative">
                    <div class="w-[317px] h-[708px] left-0 top-0 absolute bg-white hover:bg-stone-300 border border-stone-300">
                        <h2 class="left-[112px] top-[48px] absolute text-center text-blue-200 hover:text-white text-2xl font-medium font-['Poppins']">Regular</h2>
                        <div class="h-[27px] left-[117.50px] top-[100px] absolute justify-start items-start gap-px inline-flex">
                            <p class="text-center text-neutral-200 hover:text-white text-3xl font-normal font-['Poppins']">N******</p>
                        </div>
                        <p class="left-[43.86px] top-[414.14px] absolute origin-top-left -rotate-45 text-center text-neutral-200 hover:text-white text-4xl font-medium font-['Poppins']">Coming Soon</p>
                        <button class="h-[58px] px-[30px] py-5 left-[85px] top-[602px] absolute bg-lime-500 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                            <p class="text-white text-[19px] font-medium font-['Poppins']">Add Plan</p>
                        </button>
                    </div>
                </div>

                {/* The Premium Plan */}
                <div class="w-[317px] h-[708px] relative">
                    <div class="w-[317px] h-[708px] left-0 top-0 absolute bg-white hover:bg-stone-300 border border-stone-300">
                        <h2 class="left-[112px] top-[48px] absolute text-center text-blue-200 hover:text-white text-2xl font-medium font-['Poppins']">Premium</h2>
                        <div class="h-[27px] left-[117.50px] top-[100px] absolute justify-start items-start gap-px inline-flex">
                            <p class="text-center text-neutral-200 hover:text-white text-3xl font-normal font-['Poppins']">N******</p>
                        </div>
                        <p class="left-[43.86px] top-[414.14px] absolute origin-top-left -rotate-45 text-center text-neutral-200 hover:text-white text-4xl font-medium font-['Poppins']">Coming Soon</p>
                        <button class="h-[58px] px-[30px] py-5 left-[85px] top-[602px] absolute bg-lime-500 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                            <p class="text-white text-[19px] font-medium font-['Poppins']">Add Plan</p>
                        </button>
                    </div>
                </div>
            </div>

            {/* The Enterprise Plan */}
            <div class="w-[317px] h-[708px] relative">
                <div class="w-[317px] h-[708px] left-0 top-0 absolute bg-white hover:bg-stone-300 border border-stone-300">
                    <h2 class="left-[112px] top-[48px] absolute text-center text-blue-200 hover:text-white text-2xl font-medium font-['Poppins']">Enterprise</h2>
                    <div class="h-[27px] left-[117.50px] top-[100px] absolute justify-start items-start gap-px inline-flex">
                        <p class="text-center text-neutral-200 hover:text-white text-3xl font-normal font-['Poppins']">N******</p>
                    </div>
                    <p class="left-[43.86px] top-[414.14px] absolute origin-top-left -rotate-45 text-center text-neutral-200 hover:text-white text-4xl font-medium font-['Poppins']">Coming Soon</p>
                    <button class="h-[58px] px-[30px] py-5 left-[85px] top-[602px] absolute bg-lime-500 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                        <p class="text-white text-[19px] font-medium font-['Poppins']">Add Plan</p>
                    </button>
                </div>
            </div>

        </div>

    )
}

export default Pricing