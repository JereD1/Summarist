'use client';
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with the public key
const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY || 'pk_test_51PRdMKP0PCx2VscisAAlJtxOmJtzGqFkwTJ4xLFJmeMtURGbSvoLrr469F6ahKIV9SPFUSPc66TCPrPEIinaW8cG00tMk3YdKN', {
  apiVersion: '2024-06-20',
});

console.log('stripe public key:', process.env.STRIPE_PUBLIC_KEY);

const StripePlan: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'premiumPlus' | 'premiumMonthly'>('premiumPlus');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Handle plan selection
  const handleSelectPlan = (plan: 'premiumPlus' | 'premiumMonthly') => {
    setSelectedPlan(plan);
    setErrorMessage(null);  // Reset error message on plan change
  };

  // Handle checkout session creation
  const handleCheckout = async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const stripe = await stripePromise;

      const response = await fetch('/api/CheckoutSession', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plan: selectedPlan }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const { id } = await response.json();

      // Redirect to Stripe Checkout
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: id });
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      setErrorMessage('There was an issue with the checkout process. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-4 p-2">
      <div className="m-2 p-2">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Choose the plan that fits you</h1>
      </div>
      <div className="flex flex-col items-center w-full max-w-md">
        {/* Premium Plus Plan */}
        <div className="flex items-center mb-4 w-full lg:w-[600px]">
          <label
            htmlFor="premiumPlus"
            className={`w-full border-2 ${selectedPlan === 'premiumPlus' ? 'border-green-500' : 'border-gray-300'} bg-gray-100 p-4 flex flex-col items-start lg:rounded-lg`}
          >
            <input
              type="radio"
              name="plan"
              id="premiumPlus"
              value="premiumPlus"
              checked={selectedPlan === 'premiumPlus'}
              onChange={() => handleSelectPlan('premiumPlus')}
              disabled={loading}  // Disable when loading
              className="w-6 h-6 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"
            />
            <div className="ml-2">
              <h2 className="font-bold text-lg">Premium Plus Yearly</h2>
              <h2 className="font-bold text-xl">$99.99/Year</h2>
              <h3>7-day free trial included</h3>
            </div>
          </label>
        </div>

        {/* Divider */}
        <div className="m-4 flex flex-row justify-center items-center gap-4">
          <div className="w-[120px] border-t-2 border-gray-400"></div>
          <span>or</span>
          <div className="w-[120px] border-t-2 border-gray-400"></div>
        </div>

        {/* Premium Monthly Plan */}
        <div className="flex items-center w-full mb-4 lg:w-[600px]">
          <label
            htmlFor="premiumMonthly"
            className={`w-full border-2 ${selectedPlan === 'premiumMonthly' ? 'border-green-500' : 'border-gray-300'} bg-gray-100 p-4 flex flex-col items-start lg:rounded-lg`}
          >
            <input
              type="radio"
              name="plan"
              id="premiumMonthly"
              value="premiumMonthly"
              checked={selectedPlan === 'premiumMonthly'}
              onChange={() => handleSelectPlan('premiumMonthly')}
              disabled={loading}  // Disable when loading
              className="w-6 h-6 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"
            />
            <div className="ml-2">
              <h2 className="font-bold text-lg">Premium Monthly</h2>
              <h2 className="font-bold text-xl">$9.99/Month</h2>
              <h3>No trial included</h3>
            </div>
          </label>
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {/* Checkout Button */}
      <div className="flex flex-col justify-center items-center mt-6 mb-6">
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="bg-green-500 p-2 w-full max-w-xs rounded m-2"
        >
          {loading ? 'Loading...' : selectedPlan === 'premiumPlus' ? 'Start your free 7-day trial' : 'Start your first month'}
        </button>
        <h3 className="text-center">
          {selectedPlan === 'premiumPlus'
            ? "Cancel your trial at any time before it ends, and you won't be charged"
            : '30-day money-back guarantee, no questions asked.'}
        </h3>
      </div>
    </div>
  );
};

export default StripePlan;