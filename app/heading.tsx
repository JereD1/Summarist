import { useState } from 'react';
import Image from 'next/image';
import LoginModal from './components/loginModal';

const Heading = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='m-6 flex flex-col lg:flex-row items-center lg:items-start'>
      <div className='flex flex-col justify-center w-full lg:w-7/12'>
        <div className='mb-4 mt-6'>
          <p className='font-bold text-3xl lg:text-4xl text-center lg:w-[400px] text-gray-700 lg:text-left'>
            Gain More Knowledge in Less Time
          </p>
        </div>
        <div className='text-center lg:text-left mb-4 lg:mb-4 w-full lg:w-[300px]'>
          <p>
            Great summaries for busy people, individuals who barely have time to read, and even people who don't like to read.
          </p>
        </div>
        <div className='flex justify-center lg:justify-start'>
          <button 
            className='bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 w-[260px] lg:w-[320px] rounded'
            onClick={() => setShowModal(true)}
          >
            Login
          </button>
        </div>
      </div>
      <div className='flex justify-center lg:justify-end w-full lg:w-5/12 mt-6 lg:mt-0'>
        <Image
          src="/landing.png"
          width={300}
          height={500}
          quality={100}
          alt="Landing Image"
          className="w-[250px] h-auto lg:w-[400px]" // Responsive image size
        />
      </div>
      <LoginModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Heading;
