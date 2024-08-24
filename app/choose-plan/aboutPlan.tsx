'use client'
import React, { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface ButtonState {
  button1: boolean;
  button2: boolean;
  button3: boolean;
  button4: boolean;
}

const aboutPlan = () => {
  const [showText, setShowText] = useState<ButtonState>({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
  });

  const handleButtonClick = (buttonId: keyof ButtonState) => {
    setShowText((prevState) => ({
      ...prevState,
      [buttonId]: !prevState[buttonId],
    }));
  };

  return (
    <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols lg:w-[1040px] mx-auto'> {/* Responsive grid */}
      <div className='border-b-2 mb-6 flex flex-col'>
        <button onClick={() => handleButtonClick('button4')} className='flex justify-between'>
          <h1 className='mb-4 font-bold text-2xl'>How does the free 7 days trial work?</h1>
          {showText.button4 ? <MdKeyboardArrowDown size={30} /> : <MdKeyboardArrowUp size={30} />}
        </button>
        <div style={{ display: showText.button4 ? 'block' : 'none' }} className='transition ease-in-out delay-500'>
          <h3 className='text-base mb-4'>
             Begin your complimentary 7-day trial with a Summarist annual membership. 
            You are under no obligation to continue your subscription, 
            and you will only be billed when the trial period expires. 
            With Premium access, you can learn at your own pace and as frequently as you desire,
             and you may terminate your subscription prior to the conclusion of the 7-day free trial.
          </h3>
        </div>
      </div>

      <div className='border-b-2 mb-6 flex flex-col'>
        <button onClick={() => handleButtonClick('button3')} className='flex justify-between'>
          <h1 className='mb-4 font-bold text-2xl'>Can I switch subscriptions from monthly to yearly, or yearly to monthly?</h1>
          {showText.button3 ? <MdKeyboardArrowDown size={30} /> : <MdKeyboardArrowUp size={30} />}
        </button>
        <div style={{ display: showText.button3 ? 'block' : 'none' }} className='transition ease-in-out delay-500'>
          <h3 className='text-base mb-4'>
          While an annual plan is active,
             it is not feasible to switch to a monthly plan. However, 
             once the current month ends, transitioning from a monthly plan 
             to an annual plan is an option.
          </h3>
        </div>
      </div>

      <div className='border-b-2 mb-6 flex flex-col'>
        <button onClick={() => handleButtonClick('button2')} className='flex justify-between'>
          <h1 className='mb-4 font-bold text-2xl'>What's included in the Premium plan?</h1>
          {showText.button2 ? <MdKeyboardArrowDown size={30} /> : <MdKeyboardArrowUp size={30} />}
        </button>
        <div style={{ display: showText.button2 ? 'block' : 'none' }} className='transition ease-in-out delay-500'>
          <h3 className='text-base mb-4'>
            Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books, high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle.
          </h3>
        </div>
      </div>

      <div className='border-b-2 mb-6 flex flex-col'>
        <button onClick={() => handleButtonClick('button1')} className='flex justify-between'>
          <h1 className='mb-4 font-bold text-2xl'>Can I cancel during my trial or subscription?</h1>
          {showText.button1 ? <MdKeyboardArrowDown size={30} /> : <MdKeyboardArrowUp size={30} />}
        </button>
        <div style={{ display: showText.button1 ? 'block' : 'none' }} className='transition ease-in-out delay-500'>
          <h3 className='text-base mb-4'>
            You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default aboutPlan;