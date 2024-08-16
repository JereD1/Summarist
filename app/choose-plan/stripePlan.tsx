import React from 'react'

const stripePlan = () => {
  return (
    <div>
      <div>
        <h1>Choose the plan that fits you</h1>
      </div>
      <button>
        <h2>Premium Plus Yealy</h2>
        <h2>%99.99/Year</h2>
        <h3>7-day free trial included</h3>
      </button>
      <div className="m-4 flex flex-row justify-center items-center gap-4">
                  <div className="w-[120px] border-t-2 border-gray-400 "></div>
                  <span>or</span>
                  <div className="w-[120px] border-t-2 border-gray-400 "></div>
                </div>
        <button>
        <h2>Premium Montly</h2>
        <h2>%9.99/Year</h2>
        <h3>No trial included</h3>
        </button>

        <div>
            <button>
                Start your free 7-day trial
            </button>
            <h3>Cancel your trial at any time before it ends, and you won't be charged</h3>
        </div>
        
            <div>
                <button>
                    Start your first month
                </button>
                <h3>30 day money back guarantee, no questions asked.</h3>
            </div>
        
    </div>
  )
}

export default stripePlan
