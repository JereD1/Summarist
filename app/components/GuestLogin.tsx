'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

import { FaUser } from "react-icons/fa";
const GuestLogin = () => {
    

  return (
    <button  className='bg-blue-800 hover:bg-blue-700 flex justify-center items-center w-[300px] rounded '>
    <FaUser size={28} className='text-white p-1 m-1 rounded'/>
    <p className='text-white flex-grow text-center '> Login as a Guest </p>
      </button>
  )
}

export default GuestLogin
