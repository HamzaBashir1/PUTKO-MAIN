"use client";
import React from 'react'
import Hero from './components/Hero';
import Features from './components/Features';
import SubscriptionPriceList from './components/SubscriptionPriceList'
import Featuresection from './components/Featuresection';
import Pri from './components/Pri'
import Testimonials from './components/Testimonials'
import ExtraServices from './components/ExtraServices'

import ControlPanel from './components/ControlPanel'

import HowToStart from './components/HowToStart'

import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import SimplicitySection from './components/SimplicitySection'

function page() {
  return (
    <div className=''>
    <div className='lg:ml-16 ml-0'>
      <Hero/>
      <Features/>
      </div>
      
      <SubscriptionPriceList/>
      
      <Featuresection/>
     
      
      
      <SimplicitySection/>
      <ControlPanel/>
     
      <ExtraServices/>
      <Pri/>
      <HowToStart/>
      <Testimonials/>
      <FAQSection/>
      <ContactSection/>

    </div>
  )
}

export default page
