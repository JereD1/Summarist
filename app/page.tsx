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
    <div className=' mt-6 mx-[500px] h-full '>
      <div className=' '>
      <div className='flex items-center justify-between' >
      <Image
      src="/logo.png"
      width={200}
      height={300}
      alt="Picture of the author"
    />

    
    <div className=' flex gap-6 '>
      
      <button onClick={() => setShowModal(true)} >Login</button>
      <button >About</button>
      <button >Contact</button>
      <button >Help</button>
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
    <LoginModal  isVisible={showModal} onClose={() => setShowModal(false) } />
    
    </div>
  );
}
