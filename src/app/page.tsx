import React from 'react'
import Hero from '@/components/hero'
import Ai from '@/components/ai'
import Solutions from '@/components/solutions'
import Tools from '@/components/tools'
import Automation from '@/components/automation'
import Testimonial from '@/components/testimonial'
import Faq from '@/components/faq'

const page = () => {
  return (
    <>
      <Hero />
      <Ai />
      <Solutions />
      <Tools />
      <Automation />
      <Testimonial />
      <Faq />
    </>
  )
}

export default page