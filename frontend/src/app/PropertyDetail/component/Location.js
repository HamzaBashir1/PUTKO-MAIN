import React from 'react';
import Image from 'next/image';
import { ImCart, ImPieChart, ImSpoonKnife } from 'react-icons/im';
import location from '../../../../public/location.png';

const Location = () => {
  return (
    <div className='rounded-lg p-6 mt-5 bg-white mr-[440px] ml-[18px]'>
      <h1 className='text-xl md:text-2xl font-bold mb-2'>Location</h1>
      <p className=' p-2 rounded-md mb-4'>
        Slovakia / Martin district / Bela - Dulice
      </p>

      <Image src={location} alt="Location" className='w-full h-auto mb-4' />

      <p className='mb-4'>
        <span className='font-bold'>Villa LIMACO Jasenská Dolina</span>
        Villa LIMACO Jasenská Dolina is located in the area of ​​Jasenská Dolina on the outskirts of the village of
        Turčianske Jaseno, just 1 km from the Jasenská Dolina Ski Center and the Jasenská Bike Park. You can also Show More
      </p>

      <hr className='mb-4' />

      <div className='space-y-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <div className='bg-slate-200 p-2 rounded-full'>
              <ImSpoonKnife />
            </div>
            <p className='text-sm md:text-base'>Restaurant</p>
          </div>
          <p className='text-sm md:text-base'>1.10KM</p>
        </div>
        <hr className='mb-4' />
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <div className='bg-slate-200 p-2 rounded-full'>
              <ImCart />
            </div>
            <p className='text-sm md:text-base'>Food</p>
          </div>
          <p className='text-sm md:text-base'>1.50KM</p>
        </div>
        <hr className='mb-4' />
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <div className='bg-slate-200 p-2 rounded-full'>
              <ImPieChart />
            </div>
            <p className='text-sm md:text-base'>Supermarket</p>
          </div>
          <p className='text-sm md:text-base'>8KM</p>
        </div>
        <hr className='mb-4' />
        {/* Example placeholder components for Bus and Airport */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <div className='bg-slate-200 p-2 rounded-full'>
              {/* Replace with actual Bus icon */}
              <span className='text-xl'>🚍</span>
            </div>
            <p className='text-sm md:text-base'>Train Station</p>
          </div>
          <p className='text-sm md:text-base'>8KM</p>
        </div>
        <hr className='mb-4' />
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <div className='bg-slate-200 p-2 rounded-full'>
              {/* Replace with actual Airport icon */}
              <span className='text-xl'>✈️</span>
            </div>
            <p className='text-sm md:text-base'>Airport</p>
          </div>
          <p className='text-sm md:text-base'>8KM</p>
        </div>
        <hr className='mb-4' />
      </div>
    </div>
  );
};

export default Location;
