'use client'
import React from 'react'
import { useState } from 'react';

import { useRouter } from 'next/navigation';

  

const EmailAndPassoword = () => {
    
  return (
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

     <button  className='bg-green-500 hover:bg-green-600 text-black
       py-2 px-4 w-[320px] rounded' onClick={handleEmailSignIn}>Login</button>
    </div>
  )
}

export default EmailAndPassoword
