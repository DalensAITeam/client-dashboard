import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from 'react-redux';
import { signup, setEmail, setFirstName, setLastName, google_signup } from '../../Redux/UserDataSlice';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function SignupPage() {
    const [email, setEmailValue] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [displayPassword, setDisplayPassword] = useState(false);
    const [displayConfirmPassword, setDisplayConfirmPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isError, isSuccess, error } = useSelector(state => state.userdata);

    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
            email,
            password,
            confirmPassword
        };
        dispatch(signup(formData));
    };

    useEffect(() => {
        if (isSuccess) {
            console.log("An activation link has been sent to your email");
            navigate('/login');
        }
        if (isError) {
            console.log(error);
        }
    }, [isSuccess, isError, error, navigate]);

    const handleGoToLogin = () => {
        navigate('/login');
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
            <div className='bg-white min-w-[35vw] rounded-md min-h-[50vh]'>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: '15px'
                }}>
                    <img src="./dalensAI.svg" alt="dalensAI" width={'120px'} />
                    <h1 className='text-2xl mt-5'>Sign up</h1>
                    <div className='mt-2 flex items-center justify-center'>
                        <GoogleLogin
                            onSuccess={response => {
                                const data = jwtDecode(response.credential);
                                const { email, given_name, family_name, sub, picture } = data;

                                const formData = {
                                    email,
                                    first_name: given_name,
                                    last_name: family_name,
                                    google: true,
                                    sub,
                                    google_picture: picture
                                };

                                dispatch(google_signup(formData));
                                dispatch(setEmail(data.email));
                                dispatch(setFirstName(data.given_name));
                                dispatch(setLastName(data.family_name));

                                console.log("Account created");
                                navigate('/settings/profile');
                            }}
                            onError={() => console.log('Signup failed')}
                        ></GoogleLogin>
                    </div>
                    <h5 className='mt-[15px]'>OR</h5>
                </div>
                <form className='p-8' onSubmit={handleSubmit} method='post'>
                    <input placeholder='Email' name='email' value={email} onChange={e => setEmailValue(e.target.value)} className='w-full  outline-none' />
                    <div className='relative'>
                        <input
                            name='password'
                            type={displayPassword ? 'text' : 'password'}
                            placeholder='Password'
                            className='w-full mt-5 outline-none'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        {displayPassword ? (
                            <VisibilityOffIcon className='absolute top-[-8px] right-0 mt-6 mr-4 text-gray-500 cursor-pointer' onClick={() => setDisplayPassword(!displayPassword)} />
                        ) : (
                            <VisibilityIcon className='absolute top-[-8px] right-0 mt-6 mr-4 text-gray-500 cursor-pointer' onClick={() => setDisplayPassword(!displayPassword)} />
                        )}
                    </div>
                    <div className='relative'>
                        <input
                            name='re_password'
                            type={displayConfirmPassword ? 'text' : 'password'}
                            placeholder='Confirm password'
                            className='w-full mt-5 outline-none'
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                        {displayConfirmPassword ? (
                            <VisibilityOffIcon className='absolute top-[-8px] right-0 mt-6 mr-4 text-gray-500 cursor-pointer' onClick={() => setDisplayConfirmPassword(!displayConfirmPassword)} />
                        ) : (
                            <VisibilityIcon className='absolute top-[-8px] right-0 mt-6 mr-4 text-gray-500 cursor-pointer' onClick={() => setDisplayConfirmPassword(!displayConfirmPassword)} />
                        )}
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex item-center justify-center mt-2'>
                            <button className='bg-[#70E000] text-white rounded-[5px] p-2' type='submit'>Create account</button>
                        </div>
                        <div className='flex items-center justify-center mt-2'>
                            <p className='text-[12px]'>Already have an account?</p><span onClick={handleGoToLogin} className='text-[#70E000] cursor-pointer'>login</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;
