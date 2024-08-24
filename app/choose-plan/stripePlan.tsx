'use client'
import React, { useState } from 'react';

const stripePlan = () => {
  const [selectedPlan, setSelectedPlan] = useState('premiumPlus');

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
  };

  return (
    <div className='flex flex-col justify-center items-center m-6 p-2'>
      <div className='m-2 p-2'>
        <h1 className='text-3xl font-bold'>Choose the plan that fits you</h1>
      </div>
      <div className='flex flex-col'>
        <div className='flex items-center'>
          <label htmlFor="premiumPlus" className={`w-[800px] border-2 ${selectedPlan === 'premiumPlus' ? 'border-green-500' : 'border-gray-300'} bg-gray-100 p-4 flex flex-col items-start`}>
            <input 
              type="radio" 
              name="plan" 
              id="premiumPlus" 
              value="premiumPlus"
              checked={selectedPlan === 'premiumPlus'}
              onChange={() => handleSelectPlan('premiumPlus')}
              className="w-6 h-6 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"
            />
            <div className="ml-14"> 
              <h2 className='font-bold text-lg'>Premium Plus Yearly</h2>
              <h2 className='font-bold text-xl'>$99.99/Year</h2>
              <h3>7-day free trial included</h3>
            </div>
          </label>
        </div>
      </div>
      
      <div className="m-4 flex flex-row justify-center items-center gap-4">
        <div className="w-[120px] border-t-2 border-gray-400 "></div>
        <span>or</span>
        <div className="w-[120px] border-t-2 border-gray-400 "></div>
      </div>

      <div className='flex items-center'>
        <label htmlFor="premiumMonthly" className={`w-[800px] border-2 ${selectedPlan === 'premiumMonthly' ? 'border-green-500' : 'border-gray-300'} bg-gray-100 p-4 flex flex-col items-start`}>
          <input 
            type="radio" 
            name="plan" 
            id="premiumMonthly" 
            value="premiumMonthly"
            checked={selectedPlan === 'premiumMonthly'}
            onChange={() => handleSelectPlan('premiumMonthly')}
            className="w-6 h-6 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"
          />
          <div className="ml-14"> 
            <h2 className='font-bold text-lg'>Premium Monthly</h2>
            <h2 className='fotn-bold text-xl'>$9.99/Month</h2>
            <h3>No trial included</h3>
          </div>
        </label>
      </div>

      {selectedPlan === 'premiumPlus' && (
        <div className='flex flex-col justify-center items-center mt-6 mb-6'>
          <button className='bg-green-500 p-2 w-72 rounded m-2'>
            Start your free 7-day trial
          </button>
          <h3>Cancel your trial at any time before it ends, and you won't be charged</h3>
        </div>
      )}

      {selectedPlan === 'premiumMonthly' && (
        <div className='flex flex-col justify-center items-center mt-6 mb-6'>
          <button className='bg-green-500 p-2 w-72 rounded m-2'>
            Start your first month
          </button>
          <h3>30-day money-back guarantee, no questions asked.</h3>
        </div>
      )}
    </div>
  );
};

export default stripePlan;