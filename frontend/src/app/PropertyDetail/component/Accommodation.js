import React from 'react'

const Accommodation = () => {
  return (
    <div>
    <div className="max-w-4xl p-4 mx-auto sm:p-8">
    {/* Header Section */}
    <div className="mb-6">
      <h2 className="text-xl font-bold sm:text-2xl">Accommodation price list</h2>
      <p className="text-sm text-gray-600">An overview of accommodation prices to help you plan your stay.</p>
    </div>

    {/* Price Chart Section */}
    <div className="pb-4 mb-4 border-b">
      <div className="flex items-center justify-between">
        
      <h3 className="flex flex-row text-lg font-semibold" > <img src='/Image (2).png'/>2024</h3>
        <div className="flex items-center space-x-2">
          <button className="p-1 bg-gray-100 rounded-full">
           
          </button>
          <button className="p-1 bg-gray-100 rounded-full">
           
          <img src='/Button.png'/>
          </button>
        </div>
      </div>
      <div className="h-20 mt-4 bg-gray-200 rounded-lg"></div> {/* Placeholder for price chart */}
    </div>

    {/* Price Details Section */}
    <div className="space-y-4">
      <div className="flex items-center justify-between py-2 border-t border-gray-200">
        <div>
          <h4 className="text-base font-semibold">Base rate</h4>
          <p className="text-xs text-gray-500">Minimum 1 night, without meals</p>
        </div>
        <div>
          <span className="text-lg font-bold">240€</span>
          <p className="text-xs text-gray-500">per night</p>
        </div>
      </div>
      <div className="flex items-center justify-between py-2 border-t border-gray-200">
        <div>
          <h4 className="text-base font-semibold">Winter season</h4>
          <p className="text-xs text-gray-500">Valid from 2.1. until 15.3. Minimum 1 night without meals</p>
        </div>
        <div>
          <span className="text-lg font-bold">290€</span>
          <p className="text-xs text-gray-500">per night</p>
        </div>
      </div>
      <div className="flex items-center justify-between py-2 border-t border-gray-200">
        <div>
          <h4 className="text-base font-semibold">Easter</h4>
          <p className="text-xs text-gray-500">Valid from 18.4. until 21.4. Minimum 1 night without meals</p>
        </div>
        <div>
          <span className="text-lg font-bold">290€</span>
          <p className="text-xs text-gray-500">per night</p>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Accommodation
