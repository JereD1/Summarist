import React from 'react'
import { AiFillFile } from "react-icons/ai";
import { MdLightbulb } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='flex flex-col justify-center m-4 p-4 text-center'>
      <div className='flex justify-center p-3 mb-8'>
        <p className='font-bold text-lg md:text-xl'>Understand books in few minutes</p>
      </div>

      {/* Responsive grid layout for icons and text */}
      <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mb-5 items-center'>
        <div className='p-6 flex flex-col items-center justify-center'>
          <AiFillFile size={40} className="mb-3" />
          <p className='font-bold my-2 text-base md:text-lg'>Read or listen</p>
          <p className='text-sm text-center'>Save time by getting the core ideas from the best books</p>
        </div>

        <div className='p-6 flex flex-col items-center justify-center'>
          <MdLightbulb size={40} className="mb-3" />
          <p className='font-bold my-2 text-base md:text-lg'>Read or listen</p>
          <p className='text-sm text-center'>Save time by getting the core ideas from the best books</p>
        </div>

        <div className='p-6 flex flex-col items-center justify-center'>
          <FaMicrophone size={40} className="mb-3" />
          <p className='font-bold my-2 text-base md:text-lg'>Read or listen</p>
          <p className='text-sm text-center'>Save time by getting the core ideas from the best books</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;
