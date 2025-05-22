import React, { useState } from 'react';
import Modal from '../modalComponent/modal';
import { resetPassword } from '../../Redux/UserDataSlice';
import { useDispatch } from 'react-redux';

function ForgotPassword() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [errors, setError] = useState(false);
  const dispatch = useDispatch()

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleVerificationNext = (e) => {
    e.preventDefault();
    // const formElement = document.getElementById('formElement')
    // const form = new FormData(formElement)
    // const formData = Object.fromEntries(form)
    // dispatch(resetPassword(formData))
    if (email.length === 0 || !isValidEmail(email)) {
      setIsOpen(false);
      setError(true);
      return;
    } else {
      const formData = new FormData();
      formData.append('email', email);
  
      // Dispatch async thunk action
      dispatch(resetPassword(formData));
      setError(false);
      setEmail('')
    }
  };

  const {isError,isSuccess,error} = useSelector((state) => state.userdata)
  useEffect(() => {
   if (isSuccess){
   //toast.success("Logged in sucessfully")
   setIsOpen(true)
   }
   if (isError){
       //toast.error(error)
       console.log(error);
   }
  },[isSuccess,isError,error])

  return (
    <div className='h-[100vh] w-[100vw] bg-[url(/womanFeeding.png)] bg-center bg-cover flex items-center justify-center'>
      <div className='bg-white min-w-[35vw] md:max-w-[70vw] rounded-md min-h-[52vh]'>
        <div className='flex flex-col items-center justify-center w-[100%] mt-[15px]'>
          <img src="./dalensAI.svg" alt="dalensAI" width={'120px'} />
          <p className='mt-[16px] text-[18px] font-medium'>Forgot Password?</p>
        </div>
        <form className='p-9 flex flex-col items-center justify-between h-[30vh]' id='formElement'>
          <input
            placeholder='Email'
            className='w-full mt-[5px]  outline-none'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors && <p className='text-[red] mb-[-10px]'>Invalid email format or input cannot be empty</p>}
          <button
            className='bg-[#70E000] min-w-[6vw]  text-white rounded-[5px] p-2 mt-[45px]'
            onClick={handleVerificationNext}
            type='submit'
          >
            Next
          </button>
        </form>
        {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} text='We have Sent a Verification Link to your Email' dashboard />}
      </div>
    </div>
  );
}

export default ForgotPassword;