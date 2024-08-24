import React from 'react'
import { IoDocumentTextSharp } from "react-icons/io5";
import { GiStumpRegrowth } from "react-icons/gi";
import { FaHandshakeSimple } from "react-icons/fa6";

const value = () => {
  return (
    <div className='flex justify-center items-center m-6 p-4'>
        <div className='flex flex-wrap gap-5 justify-center'> 
            <div className='flex flex-col items-center text-center'> {/* Add flex-col and items-center to the div */}
                <IoDocumentTextSharp size={50}/>
                <h2 className='w-60'><span className='font-semibold'>Key ideas in few min </span> with many books to read</h2>
            </div>
            <div className='flex flex-col items-center text-center'>
                <GiStumpRegrowth size={50} />
                <h2 className='w-60'><span className='font-semibold'>3 million</span> people growing with Summarist everyday </h2>
            </div>
            <div className='flex flex-col items-center text-center'>
                <FaHandshakeSimple size={50}/>
                <h2 className='w-60'><span className='font-semibold'>Precise recommendation</span> collections curated by experts</h2>
            </div>
        </div>
      
    </div>
  )
}

export default value