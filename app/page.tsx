'use client'
import Image from 'next/image';
import Footer from './footer';
import Rating from './rating';
import Members from './members';
import Read from './read';
import Hero from './hero';
import Heading from './heading';
import LoginModal from './components/loginModal';

import { useState } from 'react';

export default function Home() {
 
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div>
      <div className='mt-6 p-4 mx-4 md:mx-auto md:w-[80%] lg:w-[60%] h-full'>
        <div className='mb-10'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <Image
              src="/logo.png"
              width={200}
              height={300}
              alt="Logo"
              className="w-[150px] md:w-[200px]" // Responsive logo size
            />    
            <div className='flex gap-4 mt-4 md:mt-0'>
              <button className='text-sm md:text-base' onClick={() => setShowModal(true)}>Login</button>
              <button className='text-sm md:text-base'>About</button>
              <button className='text-sm md:text-base'>Contact</button>
              <button className='text-sm md:text-base'>Help</button>
            </div>
          </div>
        </div>      
        <Heading />
        <Hero />
        <Read />
        <Members />
      </div>
      <Rating />
      <Footer />
      <LoginModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
