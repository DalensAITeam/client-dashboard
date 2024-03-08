import React from 'react'
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const [password, setPassword] = useState('');
    const[displayPassword, setDisplayPassword]= useState(false)

    const navigate=useNavigate();

    const handleGoToSignup=()=>{
        navigate('/signup');
    }
    const handleGoToForgotPassword=()=>{
        navigate('/forgotPassword');
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
        <div  className='bg-white min-w-[35vw] md:max-w-[60vw] rounded-md min-h-[50vh]'>
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
            <form className='p-8'>
                <input placeholder='Email' className='w-full outline-none'/>
                <div className='relative'>
                <input type={displayPassword ? 'text': 'password'} placeholder='Password' className='w-full mt-5 outline-none' value={password} onChange={(e) => setPassword(e.target.value)}/>
                { displayPassword ?<VisibilityOffIcon className='absolute top-[-8px] right-0 mt-6 mr-4 text-gray-500 cursor-pointer'  onClick={()=>{setDisplayPassword(!displayPassword)}}/>
                :<VisibilityIcon className='absolute top-[-8px] right-0 mt-6 mr-4 text-gray-500 cursor-pointer' onClick={() => setDisplayPassword(!displayPassword)}/>}
                <div className='mt-2 flex flex-col md:flex-row justify-between items-center sm:display-grid'>
                    <div className='flex  '>
                        <input type="checkbox"/>
                        <p className='text-[11px] ml-1'>Remember me</p>
                    </div>
                    <p className='text-[11px] text-[#70E000] cursor-pointer' onClick={handleGoToForgotPassword}>Forgot Password?</p>
                </div>
                <div className='flex flex-col'>
                    <div className='flex item-center justify-center mt-2'>
                    <button className='bg-[#70E000] w-1/2 text-white rounded-[5px] p-3'>Login</button>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center mt-2'>
                        <p className='text-[12px]'>Don't have an account?</p><span onClick={handleGoToSignup} className='text-[#70E000] cursor-pointer'>create one</span>
                    </div>
                </div>
                </div>
            </form>
        </div>
    </div>;
}

export default LoginPage