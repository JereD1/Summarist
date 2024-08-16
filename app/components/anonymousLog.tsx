import React from 'react'
import { auth } from '@/firebase/firebase'
import { signInAnonymously } from 'firebase/auth';
import { IoPersonSharp } from "react-icons/io5";
import { useRouter } from 'next/navigation';

const AnonymousLog = () => {
  const router = useRouter();

  const handleAnonymousLogin = async () => {
    try {
      await signInAnonymously(auth);
      console.log('Anonymous login successful');
      router.push('./account')
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error ${error}: ${error.message}`);
      }
    }
  };

  return (
    <div className='flex justify-center items-center '>
      <button
        onClick={handleAnonymousLogin}
        className='relative flex items-center bg-blue-900 hover:bg-blue-700 rounded text-white w-[300px] p-2'
      >
        <IoPersonSharp size={20} className='absolute left' />
        <span className='mx-auto'>Login as a Guest</span>
      </button>
    </div>
  )
}

export default AnonymousLog;
