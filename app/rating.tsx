import Image from 'next/image'
import React from 'react'


const rating = () => {
  return (
    <div className=' flex flex-col justify-center items-center mb-4'>
      <div className=' p-6 mb-5'>
        <p className='font-bold text-xl'>Start growing with Summarist now</p>
      </div>
      <div className='mx-auto grid md:grid-cols-3 lg:grid-cols-3 gap-8'>
        <div className='bg-blue-200 rounded p-8 mb-5 flex flex-col items-center justify-center'>
            <Image  className='mb-2'
            src="/crown.png"
            width={150}
            height={700}
            alt="crown picture"
          />
            <p className='font-bold text-4xl mb-4'>3 Million</p>
            <h3 className='text-center'>Download on all platforms</h3>
            </div>

            <div className='bg-blue-200 rounded p-8 mb-5 flex flex-col items-center justify-center'>
            <Image className='mb-2'
            src="/star.png"
            width={150}
            height={700}
            alt="rating star picture"
          />
            <p className='font-bold text-4xl mb-4'>4.5 Stars</p>
            <h3 className='text-center'>Average ratings on IOS and Google Play</h3>
            </div>

            <div className='bg-blue-200 rounded p-8 mb-5 flex flex-col items-center justify-center'>
            <Image className='mb-2'
            src="/leaf.png"
            width={150}
            height={200}
            alt="leaf picture"
          />
            <p className='font-bold text-4xl mb-4'>97%</p>
            <h3 className='text-center'>Of Summarist memebers create a better reading habit</h3>
        </div>

        </div>
      </div>
  )
}

export default rating
