import React,{useState} from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

function ChangePassword() {
    const [password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword]= useState('');
    const[displayPassword, setDisplayPassword]= useState(false)
    const[displayConfirmPassword, setDisplayConfirmPassword]= useState(false)

  return (
    <div className='h-[100vh] w-[100vw] bg-[url(/womanFeeding.png)] bg-center bg-cover flex items-center justify-center'>
        <div className='bg-white min-w-[35vw] md:max-w-[70vw] rounded-md min-h-[52vh]'>
        <div className='flex flex-col items-center justify-center w-[100%] mt-[15px]'>
          <img src="./dalensAI.svg" alt="dalensAI" width={'120px'} />
          <p className='mt-[16px] text-[18px] font-medium'>Reset Password</p>
        </div>
        <form className='p-8 '>
        <div className='relative'>
                        <input type={displayPassword ? 'text': 'password'} placeholder='Password' className='w-full mt-5 outline-none'  value={password} onChange={(e) => setPassword(e.target.value)}/>
                        { displayPassword?<VisibilityOffIcon className='absolute top-[-8px] right-0 mt-6 mr-4 text-gray-500 cursor-pointer' onClick={()=>setDisplayPassword(!displayPassword)} />
                        :<VisibilityIcon className='absolute top-[-8px] right-0 mt-6 mr-4 text-gray-500 cursor-pointer' onClick={() => setDisplayPassword(!displayPassword)}/>}
                    </div>
                    <div className='relative'>
                        <input type={displayConfirmPassword ? 'text': 'password'} placeholder='Confirm password' className='w-full mt-5 outline-none' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                     {displayConfirmPassword?<VisibilityOffIcon className='absolute top-[-8px] right-0 mt-6 mr-4 text-gray-500 cursor-pointer' onClick={() => setDisplayConfirmPassword(!displayConfirmPassword)}/>
                       : <VisibilityIcon className='absolute top-[-8px] right-0 mt-6 mr-4 text-gray-500 cursor-pointer' onClick={() => setDisplayConfirmPassword(!displayConfirmPassword)}/>}
                    </div>
                    <div className='flex items-center justify-center w-[100%] mt-[18px]'>
                    <button className='bg-[#70E000] text-white rounded-[5px] px-4 py-2'>Done</button>
                    </div>
        </form>
        </div>
    </div>
  )
}

export default ChangePassword