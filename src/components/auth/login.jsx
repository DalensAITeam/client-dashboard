import React from 'react'
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {

    const[formData,setFormData] = useState({})
    const[rememberMe,setRememberMe] = useState(false)

   const handleChange = (e) => {
    setFormData(prevState => ({...prevState,[e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e) => {
    e.preventDefault()

    try {
     await axios.post('http://localhost:8000/login',formData,{
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

    const navigate=useNavigate();

    const handleGoToSignup=()=>{
        navigate('/signup');
    }
    return <div style={{
        background: `url(/loginBackgroundImage.png)`,
        height: '100vh',
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center'
    }}>
        <div style={{
            width:'40vw',
            height: '80vh',
            borderRadius: '10px',
            background:'white',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginTop: '15px'
            }}>
            <img src="./dalensAI.svg" alt="dalensAI" width={'120px'}/>
            <h1 className='text-2xl mt-5'>Login</h1>
            <div className='mt-2 flex items-center justify-center'>
                <div className='mr-[2px] shadow'>
                <img src="./googleLogo.png" alt="googlesignin" width={'30px'}/>
                </div>
                <p className='ml-[5px] text-[15px]'>Continue with Google</p>
            </div>
            <h5 className='mt-[15px]'>OR</h5>
            </div>
            <form className='p-8' onSubmit={handleSubmit}>
                <input placeholder='Email' className='w-full  outline-none' name='email' onChange={handleChange}/>
                <div className='relative'>
                <input type='password' placeholder='Password' className='w-full mt-5 outline-none' name='password' onChange={handleChange} />
                <VisibilityOffIcon className='absolute top-[-8px] right-0 mt-6 mr-4 text-gray-500 cursor-pointer' />
                <div className='mt-2 flex justify-between items-center'>
                    <div className='flex  '>
                        <input type="checkbox" name="remember_me" onClick={setRememberMe(true)} onChange={handleChange}/>
                        <p className='text-[11px] ml-1'>Remember me</p>
                    </div>
                    <p className='text-[11px] text-[#70E000] cursor-pointer'>Forgot Password?</p>
                </div>
                <div className='flex flex-col'>
                    <div className='flex item-center justify-center mt-2'>
                    <button className='bg-[#70E000] w-[7vw] text-white rounded-[5px] h-[5.5vh]'>Login</button>
                    </div>
                    <div className='flex items-center justify-center mt-2'>
                        <p className='text-[12px]'>Don't have an account?</p><span onClick={handleGoToSignup} className='text-[#70E000] cursor-pointer'>create one</span>
                    </div>
                </div>
                </div>
            </form>
        </div>
    </div>;
}

export default LoginPage