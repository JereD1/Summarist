'use client'
import React, { useState } from 'react'
import 'firebase/auth';
import { useRouter } from 'next/navigation';


import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  


  return (
    <div>
      {errorMessage && (
        <div className="bg-red-500 text-white p-2 mb-4 rounded">
          {errorMessage}
        </div>
      )}
      <button onClick={handleSignInWithGoogle} className='bg-blue-400 hover:bg-blue-500 flex justify-center items-center w-[300px] rounded'>
        <FcGoogle size={28} className='bg-white p-1 m-1 rounded'/>
        <p className='text-white flex-grow text-center'>Login with Google</p>
      </button>
    </div>
  )
}

export default GoogleLogin
