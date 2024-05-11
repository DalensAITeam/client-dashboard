import React, { useState, useEffect } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, google_login, setEmail, setFirstName, setLastName, setMobileNumber, setPicture } from '../../Redux/UserDataSlice';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function LoginPage() {
    const [password, setPassword] = useState('');
    const [email, setEmailValue] = useState('');
    const [displayPassword, setDisplayPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isSuccess, isError, error } = useSelector((state) => state.userdata);

    useEffect(() => {
        const userToken = localStorage.getItem('user-token');
        if (userToken) {
            navigate('/settings/profile');
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        data.append('rememberMe', rememberMe);
        const formData = Object.fromEntries(data);
        dispatch(login(formData));
    };

    useEffect(() => {
        if (isSuccess) {
            navigate('/setup');
        }
        if (isError) {
            console.log(error);
        }
    }, [isSuccess, isError, error, navigate]);
console.log(isSuccess);
    const handleGoToSignup = () => {
        navigate('/signup');
    };

    const handleGoToForgotPassword = () => {
        navigate('/forgotPassword');
    };

    const handleRememberMe = (e) => {
        setRememberMe(e.target.checked);
    };

    return (
        <div style={{
            background: `url(/loginBackgroundImage.png)`,
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div className='bg-white min-w-[35vw] md:max-w-[60vw] rounded-md min-h-[50vh]'>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: '15px'
                }}>
                    <img src="./dalensAI.svg" alt="dalensAI" width={'120px'} />
                    <h1 className='text-2xl mt-5'>Login</h1>
                    <div className='mt-2 flex items-center justify-center'>
                        <GoogleLogin
                            onSuccess={(response) => {
                                const data = jwtDecode(response.credential);
                                const { email, given_name, family_name, picture } = data;
                                dispatch(google_login({ email, sub: data.sub }));
                                dispatch(setEmail(email));
                                dispatch(setFirstName(given_name));
                                dispatch(setLastName(family_name));
                                dispatch(setPicture(picture))

                                console.log("Account created");

                                useEffect(() => {
                                    if(isSuccess){
                                        navigate('/setup')
                                    }else{
                                       navigate('/login')
                                    }
                                },[isSuccess])
                            }}
                            onError={() => console.log('Signup failed')}
                        />
                    </div>
                    <h5 className='mt-[15px]'>OR</h5>
                </div>
                <form className='p-8' method='post' onSubmit={handleSubmit}>
                    <input placeholder='Email' className='w-full outline-none' value={email} onChange={(e) => setEmailValue(e.target.value)} />
                    <div className='relative'>
                        <input type={displayPassword ? 'text' : 'password'} placeholder='Password' className='w-full mt-5 outline-none' value={password} onChange={(e) => setPassword(e.target.value)} />
                        {displayPassword ? <VisibilityOffIcon className='absolute top-[-8px] right-0 mt-6 mr-4 text-gray-500 cursor-pointer' onClick={() => setDisplayPassword(!displayPassword)} />
                            : <VisibilityIcon className='absolute top-[-8px] right-0 mt-6 mr-4 text-gray-500 cursor-pointer' onClick={() => setDisplayPassword(!displayPassword)} />}
                        <div className='mt-2 flex flex-col md:flex-row justify-between items-center sm:display-grid'>
                            <div className='flex  '>
                                <input type="checkbox" checked={rememberMe} onClick={handleRememberMe} />
                                <p className='text-[11px] ml-1'>Remember me</p>
                            </div>
                            <p className='text-[11px] text-[#70E000] cursor-pointer' onClick={handleGoToForgotPassword}>Forgot Password?</p>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex item-center justify-center mt-2'>
                                <button className='bg-[#70E000] w-1/2 text-white rounded-[5px] p-3' type='submit' onClick={()=>{handleSubmit}}>Login</button>
                            </div>
                            <div className='flex flex-col md:flex-row items-center justify-center mt-2'>
                                <p className='text-[12px]'>Don't have an account?</p><span onClick={handleGoToSignup} className='text-[#70E000] cursor-pointer'>create one</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
