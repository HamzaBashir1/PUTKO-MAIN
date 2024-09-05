"use client"
import React from 'react'
import SubscriptionCard from './ProfessionalCard'
import ProfessionalCard from './ProfessionalCard';
import StandardCard from './StandardCard';
import BasicCard from './BasicCard'

function SubscriptionPriceList() {

  return (
    <div>
     <div className="py-12 bg-gray-50">
     
      {/* Section Title */}
      <div className="px-4 mb-10 text-center md:px-8 lg:px-16 xl:px-32">
      <h2 className="mb-4 text-2xl font-bold md:text-3xl">Subscription price list</h2>
      <p className="max-w-full mx-auto text-gray-600 md:max-w-2xl lg:max-w-4xl">
        When you sign up for the first time, you can choose from 3 special packages. The most
        <br className="hidden lg:block" />
        advantageous Profi package includes complete services with the highest number of impressions.
        <br className="hidden lg:block" />
        After the initial subscription, flat-rate packages for 12, 6, or 3 months are available.
      </p>
    </div>
    

      {/* Toggle Buttons */}
      <div className="flex flex-col justify-center gap-2 mx-5 mb-10 lg:flex-row">
        <button className="bg-white  border-black border-[2px] rounded-[10px]  px-4 py-2  shadow-sm focus:outline-none hover:bg-gray-100 text-[16px]">
          Cottages, wooden houses, log<br/>cabins
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none hover:bg-gray-100">
          Hotels, guesthouses
        </button>
      </div>

     {/* Subscription Cards */}
     <div className="grid w-full grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-8 xl:px-32">
      <div className="w-full h-full max-w-lg">
        <ProfessionalCard />
      </div>
      <div className="w-full h-full max-w-lg">
        <StandardCard />
      </div>
      <div className="w-full h-full max-w-lg">
        <BasicCard />
      </div>
    </div>

      
      
    </div> 
    </div>
  )
}

export default SubscriptionPriceList