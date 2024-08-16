'use client'
import React from 'react'
import Image from 'next/image'
import LoginModal from './components/loginModal';
import { useState } from 'react';

const Members = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className='flex justify-center m-6 p-4'>
        <p className='font-bold text-lg md:text-xl'>What our members say</p>
      </div>

      {/* Review Section */}
      <div className='flex flex-col items-center gap-5 mb-5'>
        <div className='bg-yellow-100 p-4 w-[90%] sm:w-10/12 md:w-9/12 max-w-[600px]'>
          <div className='flex items-center mb-2'>
            <p className='font-bold mr-2'>Hanna M.</p>
            <Image
              src="/fstar.png"
              width={120}
              height={10}
              alt="rating star picture"
            />
          </div>
          <div className='text-sm'>
            <p>This app has been a <span className='font-bold'>game-changer</span> for me! It's saved me so much time and effort in reading and comprehending books. Highly recommend it to all book lovers.</p>
          </div>
        </div>

        <div className='bg-yellow-100 p-4 w-[90%] sm:w-10/12 md:w-9/12 max-w-[600px]'>
          <div className='flex items-center mb-2'>
            <p className='font-bold mr-2'>David B.</p>
            <Image
              src="/fstar.png"
              width={120}
              height={10}
              alt="rating star picture"
            />
          </div>
          <div className='text-sm'>
            <p>I love this app! It provides <span className='font-bold'>concise and accurate summaries</span> of books in a way that is easy to understand. It's also very user-friendly and intuitive.</p>
          </div>
        </div>

        <div className='bg-yellow-100 p-4 w-[90%] sm:w-10/12 md:w-9/12 max-w-[600px]'>
          <div className='flex items-center mb-2'>
            <p className='font-bold mr-2'>Nathan S.</p>
            <Image
              src="/fstar.png"
              width={120}
              height={10}
              alt="rating star picture"
            />
          </div>
          <div className='text-sm'>
            <p>This app is a great way to get the main takeaways from a book without having to read the entire thing. <span className='font-bold'>The summaries are well-written and informative.</span> Definitely worth downloading.</p>
          </div>
        </div>

        <div className='bg-yellow-100 p-4 w-[90%] sm:w-10/12 md:w-9/12 max-w-[600px]'>
          <div className='flex items-center mb-2'>
            <p className='font-bold mr-2'>Ryan R.</p>
            <Image
              src="/fstar.png"
              width={120}
              height={10}
              alt="rating star picture"
            />
          </div>
          <div className='text-sm'>
            <p>If you're a busy person who <span className='font-bold'>loves reading but doesn't have the time</span> to read every book in full, this app is for you! The summaries are thorough and provide a great overview of the book's content.</p>
          </div>
        </div>
      </div>

      {/* Login Button */}
      <div className='flex justify-center m-6'>
        <button 
          className='bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 w-[260px] sm:w-[320px] rounded' 
          onClick={() => setShowModal(true)}
        >
          Login
        </button>
      </div>
      
      <LoginModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default Members;
