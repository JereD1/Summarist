import React from 'react'
import { auth } from '@/firebase/firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation';

const GoogleSignUp = () => {

  const router = useRouter();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
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
        onClick={handleGoogleLogin}
        className='relative flex items-center bg-blue-500 hover:bg-blue-700 rounded text-white w-[300px] p-2'
      >
        <FcGoogle size={25} className='absolute left bg-white' />
        <span className='mx-auto'>Sign up with Google</span>
      </button>
    </div>
  )
}

export default GoogleSignUp;
