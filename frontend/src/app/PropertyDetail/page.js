"use client";
import { useState, useEffect } from 'react';
import React from 'react';
import Heading from './component/Heading';
import Location from './component/Location';
import Date from './component/Date';
import Photo from './component/Photo';
import Information from './component/Information'
import ReservationCard from './component/ReservationCard'

const Page = () => {
  

  return (
    <div className='bg-[#f8f8f8]'>
      <Heading />
      <Photo />
      <ReservationCard/>
      <Date />
    <Information/>
    <Location/>
      
      {/* <div className='flex flex-row'>
        <div className='flex-1'>
            
        </div>
        <div className='mr-96'>
            
        </div>
      </div> */}
    </div>
  );
}

export default Page;
