import React from 'react'
import Hero from '@/components/landing/hero'
import Ai from '@/components/landing/ai'
import Solutions from '@/components/landing/solutions'
import Tools from '@/components/landing/tools'
import Automation from '@/components/landing/automation'
import Testimonial from '@/components/landing/testimonial'


const page = () => {
  return (
    <>
      <Hero />
      <Ai />
      <Solutions />
      <Tools />
      <Automation />
      <Testimonial />
    </>
  )
}

export default page