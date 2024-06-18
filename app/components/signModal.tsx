'use client'
import  { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import { useRouter } from 'next/navigation';
import GoogleLogin from './GoogleLogin';


interface Props {
  isVisible: boolean;
  onClose: () => void;
}



  const handleSignUp = async () => {
 

  return (
    <div className='fixed inset-0 flex justify-center items-center'>
      <div className='bg-white rounded-lg'>
        <div className='px-6 py-2'>
          <div className='flex flex-col'>
            <IoMdClose size={25} className='text-xl place-self-end hover:cursor-pointer' onClick={onClose} />
          </div>
          <div className='font-bold p-2 m-2 rounded flex justify-center'>
            <p>Sign up to Summarist</p>
          </div>
          <div className='p-2'>
            <GoogleLogin />
          </div>
          <div className='m-2 flex justify-center'>
            <p className='text-xs text-center'>---------------------------------- or ----------------------------------</p>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='placeholder:text-sm border-2 px-2 py-0.5 flex flex-row justify-center items-center m-2 w-[300px]'
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='placeholder:text-sm border-2 px-2 py-0.5 flex flex-row justify-center items-center m-2 w-[300px]'
            />
            <button className='bg-green-500 hover:bg-green-600 text-black py-2 px-4 m-4 w-[320px] rounded' onClick={handleSignUp}>Sign up</button>
          </div>
          
        </div>
        <div className='bg-gray-200 flex justify-center'>
          <button className='text-sm text-blue-400 m-2'>Already have an account?</button>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
