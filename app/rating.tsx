import Image from 'next/image';
import React from 'react';

const Rating = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-4 px-4'>
      <div className='p-6 mb-5 text-center'>
        <p className='font-bold text-xl md:text-2xl'>Start growing with Summarist now</p>
      </div>
      <div className='flex justify-center items-center'>
      <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6'>
        <div className='bg-blue-100 rounded p-6 flex flex-col items-center justify-center w-[300px]'>
          <Image
            className='mb-4'
            src="/crown.png"
            width={100} // Reduced size for smaller screens
            height={100} // Adjusted accordingly
            alt="crown picture"
          />
          <p className='font-bold text-3xl md:text-4xl mb-4'>3 Million</p>
          <h3 className='text-center text-sm md:text-base'>Download on all platforms</h3>
        </div>

        <div className='bg-blue-100 rounded p-6 flex flex-col items-center justify-center w-[300px]'>
          <Image
            className='mb-4'
            src="/star.png"
            width={100} // Reduced size for smaller screens
            height={100} // Adjusted accordingly
            alt="rating star picture"
          />
          <p className='font-bold text-3xl md:text-4xl mb-4'>4.5 Stars</p>
          <h3 className='text-center text-sm md:text-base'>Average ratings on iOS and Google Play</h3>
        </div>

        <div className='bg-blue-100 rounded p-6 flex flex-col items-center justify-center w-[300px]'>
          <Image
            className='mb-4'
            src="/leaf.png"
            width={100} // Reduced size for smaller screens
            height={100} // Adjusted accordingly
            alt="leaf picture"
          />
          <p className='font-bold text-3xl md:text-4xl mb-4'>97%</p>
          <h3 className='text-center text-sm md:text-base'>
            Of Summarist members create a better reading habit
          </h3>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Rating;
