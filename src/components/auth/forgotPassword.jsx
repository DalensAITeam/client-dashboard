import React, {useState} from 'react'
import Modal from '../modalComponent/modal';

function ForgotPassword() {
  const [isOpen, setIsOpen] = useState(false);
  const [email,setEmail]= useState('')
  const[error,setError]=useState(false)
  const handleVerifiCationNext =(e)=>{
    e.preventDefault()
    if(email.length===0){
    setIsOpen(false)
    setError(true)
    return
    }else{
      setIsOpen(true)
      setError(false)
    }
  }
  return (
    <div className='h-[100vh] w-[100vw] bg-[url(/womanFeeding.png)] bg-center bg-cover flex items-center justify-center'>
        <div className='bg-white min-w-[35vw] md:max-w-[70vw] rounded-md min-h-[52vh]'>
            <div className='flex flex-col items-center justify-center w-[100%] mt-[15px]'>
            <img src="./dalensAI.svg" alt="dalensAI" width={'120px'}/>
            <p className='mt-[16px] text-[18px] font-medium'>Forgot Password?</p>
            </div>
            <form className='p-9 flex flex-col items-center justify-between h-[30vh]'>         
                <input placeholder='Email' className='w-full mt-[5px]  outline-none'value={email} onChange={(e)=>setEmail(e.target.value)}/>
                {error &&<p className='text-[red] mb-[-10px]'>input fill cannot be empty</p>}
                <button className='bg-[#70E000] min-w-[6vw]  text-white rounded-[5px] p-2 mt-[45px]' onClick={handleVerifiCationNext}>Next</button>
            </form>
            {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} text='We have Sent a Verification Link to your Email'  dashboard/>}
        </div>
    </div>
  )
}

export default ForgotPassword