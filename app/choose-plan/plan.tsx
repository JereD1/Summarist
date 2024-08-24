'use client'
import Image from 'next/image';
import ChoosePlan from '@/public/pricing-top.png';

const plan = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-cyan-950 m-auto lg:rounded-b-[250px]'>
      <div className='mt-10 max-w-screen-xl px-4'> {/* Add container for better responsiveness */}
        <div className='mt-6 text-white text-center'>
          <h1 className='font-bold text-4xl md:text-5xl  lg:w-[950px] mb-6 '>Get unlimited access to many amazing books to read</h1> {/* Adjust headline size for mobile */}
          <h3 className='m-10 text-lg md:text-xl'>Turn ordinary moments into amazing learning opportunities</h3> {/* Adjust subheading size for mobile */}
        </div>
        <div className='flex justify-center max-w-[340px] mx-auto rounded-t-[180px] overflow-hidden'>
          <Image src={ChoosePlan}
           alt="Choose Plan"
           width={340}
           height={180}
           className='w-full h-auto' />
        </div>
      </div>
    </div>
  )
}

export default plan;