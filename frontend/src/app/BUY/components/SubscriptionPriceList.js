"use client"
import React from 'react'

function SubscriptionPriceList() {
  return (
    <div>
     <div className="bg-gray-50 py-12">
     
      {/* Section Title */}
      <div className="text-center mb-10 px-4 md:px-8 lg:px-16 xl:px-32">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscription price list</h2>
      <p className="text-gray-600 max-w-full md:max-w-2xl lg:max-w-4xl mx-auto">
        When you sign up for the first time, you can choose from 3 special packages. The most
        <br className="hidden lg:block" />
        advantageous Profi package includes complete services with the highest number of impressions.
        <br className="hidden lg:block" />
        After the initial subscription, flat-rate packages for 12, 6, or 3 months are available.
      </p>
    </div>
    

      {/* Toggle Buttons */}
      <div className="flex flex-col lg:flex-row justify-center space-x-4 mx-5 mb-10">
        <button className="bg-white  border-black border-[2px] rounded-[10px]  px-4 py-2  shadow-sm focus:outline-none hover:bg-gray-100">
          Cottages, wooden houses, log cabins
        </button>
        <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none hover:bg-gray-100">
          Hotels, guesthouses
        </button>
      </div>

     {/* Subscription Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
{/* Card 1 */}
<div className="bg-white p-8 py-10 rounded-lg shadow-md relative min-h-[350px] flex flex-col justify-between">
  <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 text-xs rounded">The most advantageous</div>
  
  <div>
    <h3 className="text-lg font-bold mb-2 mt-4">Professional 12 months</h3>
    <p className="text-sm text-gray-600 mb-4">only €14.95 per month</p>
    <ul className="mb-4">
      <li className="flex items-center mb-2 "><span className="mr-2">✔️</span> Creating a presentation <span className='ml-auto'> <img src='/image fill.png ' className=''/></span></li>
      <li className="flex items-center mb-2"><span className="mr-2">✔️</span> SMS notifications <span className='ml-auto'> <img src='/image fill.png ' className=''/></span></li>
      <li className="flex items-center mb-2"><span className="mr-2">✔️</span> List entries <span className='ml-auto'> <img src='/image fill.png ' className=''/></span></li>
      <li className="flex items-center mb-2"><span className="mr-2">✔️</span> Promotions and discounts <span className='ml-auto'> <img src='/image fill.png ' className=''/></span></li>
      <li className="flex items-center mb-2"><span className="mr-2">✔️</span> Topping <span className='ml-auto'> <img src='/image fill.png ' className=''/></span></li>
    </ul>
  </div>
  <div>
    <p className="text-sm text-gray-400 line-through mb-1">358€</p>
    <p className="text-xl font-bold text-gray-800">179€</p>
  </div>
</div>

{/* Card 2 */}
<div className="bg-white p-8 py-10 rounded-lg shadow-md relative min-h-[350px] flex flex-col justify-between">
  <div>
    <h3 className="text-lg font-bold mb-2 mt-4">Standard 9 months</h3>
    <p className="text-sm text-gray-600 mb-4">only €16.95 per month</p>
    <ul className="mb-4">
      <li className="flex items-center mb-2"><span className="mr-2">✔️</span> Creating a presentation <span className='ml-auto'> <img src='/image fill.png ' className=''/></span></li>
      <li className="flex items-center mb-2"><span className="mr-2">✔️</span> SMS notifications <span className='ml-auto'> <img src='/image fill.png ' className=''/></span></li>
      <li className="flex items-center mb-2"><span className="mr-2">✔️</span> List entries <span className='ml-auto'> <img src='/image fill.png ' className=''/></span></li>
      <li className="flex items-center mb-2"><span className="mr-2">❌</span> Promotions and discounts <span className='ml-auto'> <img src='/image fill.png ' className=''/></span></li>
      <li className="flex items-center mb-2"><span className="mr-2">❌</span> Topping <span className='ml-auto'> <img src='/image fill.png ' className=''/></span></li>
    </ul>
  </div>
  <div>
    <p className="text-sm text-gray-400 line-through mb-1">204€</p>
    <p className="text-xl font-bold text-gray-800">149€</p>
  </div>
</div>

{/* Card 3 */}
<div className="bg-white p-8 py-10 rounded-lg shadow-md relative min-h-[350px] flex flex-col justify-between">


  <div>
    <h3 className="text-lg font-bold mb-2 mt-4">Basic 6 months</h3>
    <p className="text-sm text-gray-600 mb-4">only €19.95 per month</p>
    <ul className="mb-4">
      <li className="flex items-center mb-2"><span className="mr-2">✔️</span> Creating a presentation <span className='ml-auto'> <img src='/image fill.png ' className=''/></span></li>
      <li className="flex items-center mb-2"><span className="mr-2">✔️</span> SMS notifications <span className='ml-auto'> <img src='/image fill.png ' className=''/></span></li>
      <li className="flex items-center mb-2"><span className="mr-2">✔️</span> List entries <span className='ml-auto'> <img src='/image fill.png ' className=''/></span></li>
      <li className="flex items-center mb-2"><span className="mr-2">❌</span> Promotions and discounts <span className='ml-auto'> <img src='/image fill.png ' className=''/></span></li>
      <li className="flex items-center mb-2"><span className="mr-2">❌</span> Topping <span className='ml-auto'> <img src='/image fill.png ' className=''/></span></li>
    </ul>
  </div>
  <div>
    <p className="text-sm text-gray-400 line-through mb-1">119€</p>
    <p className="text-xl font-bold text-gray-800">179€</p>
  </div>
</div>
</div>

    </div> 
    </div>
  )
}

export default SubscriptionPriceList
