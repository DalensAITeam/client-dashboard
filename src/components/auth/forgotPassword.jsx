import React from 'react'

function ForgotPassword() {
  return (
    <div className='h-[100vh] w-[100vw] bg-[url(/womanFeeding.png)] bg-center bg-cover flex items-center justify-center'>
        <div className='bg-white min-w-[35vw] md:max-w-[70vw] rounded-md min-h-[52vh]'>
            <div className='flex flex-col items-center justify-center w-[100%] mt-[15px]'>
            <img src="./dalensAI.svg" alt="dalensAI" width={'120px'}/>
            <p className='mt-[16px] text-[18px] font-medium'>Forgot Password?</p>
            </div>
            <form className='p-9 flex flex-col items-center justify-between h-[30vh]'>         
                <input placeholder='Email' className='w-full mt-[5px]  outline-none'/>
                <button className='bg-[#70E000] min-w-[6vw]  text-white rounded-[5px] p-2 mt-[45px]'>Next</button>
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword