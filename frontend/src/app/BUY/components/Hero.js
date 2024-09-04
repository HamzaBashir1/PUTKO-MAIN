"use client";
import React from 'react'

function Hero() {
  return (
    <div className="  pl-1  lg:flex-col-reverse   ">
      <div className="flex flex-col-reverse  md:flex-row items-center  justify-between ">
        <div className="text-left mt-9 mx-6 md:text-left max-w-md  mb-10 ">
          <h1 className=" text-5xl font-bold mb-4 text-[#292A34]">Increase your <br/>
          occupancy with  <span className='text-[#4FBE9F]'>Putko </span> for €14.95 per month.</h1>
          <p className="text-lg mb-6 text-gray-700">In the last year, we reached <b className=''>1,000,000 </b>website visits and <b>50,000 </b>inquiries. Join us today and try our services.</p>
          <div className="space-y-4 flex flex-col ">
            <button className="bg-[#4FBE9F] hover:bg-green-700 text-white rounded-[6px] font-bold py-2 px-4  focus:outline-none focus:shadow-outline">Add accommodation and try</button>
            <button className="bg-[#E7EAEE] hover:bg-gray-100 text-gray-800 rounded-[6px] font-bold py-2 px-4  focus:outline-none focus:shadow-outline">Why rent with Putko</button>
          </div>
        </div>
        <div className=" bg-red-600 bg-cover">
          <img src="/Image.png" alt="Living room" className= " bg-cover rounded-lg shadow-md " />
        </div>
      </div>
      
    </div>
  )
}

export default Hero
