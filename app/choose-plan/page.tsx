import React from 'react'
import Subscription from './plan'
import Footer from '@/app/footer'
import StripePlan from './stripePlan'
import About from './aboutPlan'
import Value from './value'

const page = () => {
  return (
    <div>
      <Subscription />
      <Value />
      <StripePlan />
      <About />
      <Footer />
    </div>
  )
}

export default page
