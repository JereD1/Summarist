import React from 'react'
import { AiFillFile } from "react-icons/ai";
import { MdLightbulb } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa6";

const hero = () => {
  return (
    <div className='flex flex-col justify-center m-7 p-4 text-center '>
      <div className='flex justify-center p-3 mb-8'>
        <p className='font-bold text-xl'>Understand books in few minutes</p>
      </div>
      <div className='mx-auto grid md:grid-cols-3 lg:grid-cols-3 gap-5 mb-5 items-center'>
      <div className='p-8 mb-5 flex flex-col items-center justify-center'>
        <AiFillFile size={50} />
        <p className='font-bold my-3'>Read or listen</p>
        <p className='text-sm'>Save time by getting the core ideas from the best books</p>
        </div>

        <div className='p-8 mb-5 flex flex-col items-center justify-center'>
        <MdLightbulb size={50} />
        <p className='font-bold my-3'>Read or listen</p>
        <p className='text-sm'>Save time by getting the core ideas from the best books</p>
        </div>

        <div className='p-8 mb-5 flex flex-col items-center justify-center'>
        <FaMicrophone size={50} />
        <p className='font-bold my-3'>Read or listen</p>
        <p className='text-sm'>Save time by getting the core ideas from the best books</p>
        </div>

      </div>

    </div>
  )
}

export default hero
