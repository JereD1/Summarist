import React from 'react'
import Subscription from './plan'
import Footer from '@/app/footer'
import StripePlan from './stripePlan'
import About from './aboutPlan'

const page = () => {
  return (
    <div>
      <Subscription />
      <StripePlan />
      <About />
      <Footer />
    </div>
  )
}

export default page
