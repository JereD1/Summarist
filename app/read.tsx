import React from 'react'
import { useEffect, useState } from 'react';

const read: React.FC= () => {
        const [highlightIndex, setHighlightIndex] = useState<number>(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setHighlightIndex((prevIndex) => (prevIndex + 1) % 6);
          }, 2000); // Change the interval as needed
      
          return () => clearInterval(interval);
        }, []);

  return (
    <>
    <div className='flex justify-around mb-14'> 
        <div className='flex'>
        <div className=" text-gray-600">
        <div className={`w-full text-3xl font-bold mb-3 ${highlightIndex === 0 && 'text-green-500'}`}>Enhance your knowledge</div>
        <div className={`w-full text-3xl font-bold mb-3 ${highlightIndex === 1 && 'text-green-500'}`}>Achieve greater success</div>
        <div className={`w-full text-3xl font-bold mb-3 ${highlightIndex === 2 && 'text-green-500'}`}>Improve your health</div>
        <div className={`w-full text-3xl font-bold mb-3 ${highlightIndex === 3 && 'text-green-500'}`}>Develop better parenting skills</div>
        <div className={`w-full text-3xl font-bold mb-3 ${highlightIndex === 4 && 'text-green-500'}`}>Increase happiness</div>
        <div className={`w-full text-3xl font-bold mb-3 ${highlightIndex === 5 && 'text-green-500'}`}>Be the best version of yourself!</div>
      </div>
      </div>

        <div className=''>
            <div className='bg-gray-200 max-w-[450px] py-12 px-6'>
                <div className='flex gap-3 mb-6'>
                    <span className='text-blue-700 font-bold'>93%</span>
                    <p className='w-[320px]'> of summarist memebers <span className='font-bold'>significantly increase </span> 
                    reading frequency.</p>
                </div>

                <div className='flex gap-3 mb-6'>
                    <span className='text-blue-700 font-bold'>96%</span>
                    <p className='w-[320px]'> of summarist memebers <span className='font-bold'>establish better </span> 
                    habits.</p>
                </div>

                <div className='flex gap-3'>
                    <span className='text-blue-700 font-bold'>93%</span>
                    <p className='w-[320px]'> have made <span className='font-bold'>significant positive </span> 
                    chanage to their lives.</p>
                </div>
            </div>
        </div>
        </div>

        <div className='flex justify-around mb-14 '> 
        <div className=''>
            <div className='bg-gray-200 max-w-[450px] py-12 px-6'>
                <div className='flex gap-3 mb-6'>
                    <span className='text-blue-700 font-bold'>91%</span>
                    <p className='w-[320px]'> of summarist memebers <span className='font-bold'>report feeling more productive </span> 
                    after incorporating the service into their daily routine.</p>
                </div>

                <div className='flex gap-3 mb-6'>
                    <span className='text-blue-700 font-bold'>94%</span>
                    <p className='w-[320px]'> of summarist memebers have <span className='font-bold'>noticed an improvement </span> 
                    in their overall comprehension and rentation of information.</p>
                </div>

                <div className='flex gap-3'>
                    <span className='text-blue-700 font-bold'>88%</span>
                    <p className='w-[320px]'> of summarist memebers <span className='font-bold'>feel more informed  </span> 
                    about events and industry trends since using the platform.</p>
                </div>
            </div>
        </div>

        <div className='flex mt-9'>
        <div className=" text-gray-600">
        <div className={`w-full text-3xl font-bold mb-3 ${highlightIndex === 0 && 'text-green-500'}`}>Expand your learning</div>
        <div className={`w-full text-3xl font-bold mb-3 ${highlightIndex === 1 && 'text-green-500'}`}>Accomplish your goals</div>
        <div className={`w-full text-3xl font-bold mb-3 ${highlightIndex === 2 && 'text-green-500'}`}>Strengthen your vitality</div>
        <div className={`w-full text-3xl font-bold mb-3 ${highlightIndex === 3 && 'text-green-500'}`}>Become a better caregiver</div>
        <div className={`w-full text-3xl font-bold mb-3 ${highlightIndex === 4 && 'text-green-500'}`}>Improve your mood</div>
        <div className={`w-full text-3xl font-bold mb-3 ${highlightIndex === 5 && 'text-green-500'}`}>Maximize your abilities</div>
      </div>
      </div>

        </div>
    
    </>
  )
}

export default read
