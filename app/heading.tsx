import { useState } from 'react';
import Image from 'next/image';
import LoginModal from  './components/loginModal'


const Heading = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className=' m-4 flex'>
      <div className='flex flex-col justify-center w-7/12'>
        <div className='mb-4 w-7/12'>
          <p className='font-bold text-4xl'>Gain More Knowledge in less time</p>
        </div>
        <div className='text-base w-6/12'>
          <p>Great Summarise for busy people, individuals 
            who barely have time to read,and even people who don't like to read</p>
          <p></p>
        </div>
        <button className='bg-green-500 hover:bg-green-600 text-black
         font-bold py-2 px-4 w-[320px] rounded' onClick={() => setShowModal(true)}>Login</button>
      </div>
      <div className='flex justify-end w-5/12'>
        <Image
          src="/landing.png"
          width={400}
          height={700}
          alt="login picture"
        />
      </div>
      <LoginModal  isVisible={showModal} onClose={() => setShowModal(false) } />
    </div>
  );
};

export default Heading;
