"use client"
import React from 'react'
import Cards from './Cards'

function ExtraServices() {
    const Card = ({ title, location, price, image }) => (
        <div className="overflow-hidden border rounded-lg shadow-lg w-80">
          <img src={image} alt={title} className="object-cover w-full h-48" />
          <div className="p-4">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-sm text-gray-500">{location}</p>
            <div className="mt-4">
              <span className="text-xl font-bold text-red-500">{price}</span> / night
            </div>
          </div>
        </div>
      );
      
  return (
    <div>
    <div className="container p-6 mx-auto">
  <h1 className="mb-6 text-4xl font-bold text-center">Extra Services</h1>
  <p className="max-w-3xl mx-auto mb-8 text-center text-gray-600">
    Use the potential of your accommodation <b>  to the maximum </b>  and try extra
    services that will enable you not only to highlight your offer, but also
    to get higher in the search results. This way, you will significantly
    increase the number of its views and the number of bookings, which means
    - higher revenues.
  </p>

  <div className="flex flex-col items-start gap-8 md:flex-row">
    {/* Title and Description Section */}
    <div className="flex-1">
      <h2 className="mb-4 text-xl font-semibold">Special Prices and Discounts</h2>
      <p className="mr-0 text-gray-600 md:mr-28">
        Set discounted prices for long stays, for early bookings, or just a
        reduced price for any period from – to. The highlighted discounted
        price is then displayed in search results and in the accommodation
        detail itself in an expanded form.
      </p>
    </div>

    {/* Cards Section */}
    <div className="flex flex-col gap-6 md:flex-row">
    <Cards/>
      <Cards/>
    </div>
  </div>
</div>

<div className="container p-6 mx-auto">
<h1 className="mb-6 text-2xl font-bold text-center"></h1>
<p className="max-w-3xl mx-auto mb-8 text-center text-gray-600">
  
</p>

<div className="flex flex-col-reverse items-start gap-8 lg:flex-1 md:flex-row">
  {/* Cards Section */}
  <div className="flex flex-col gap-6 md:flex-row ">
  <Cards/>
  <Cards/>
  </div>

  {/* Title and Description Section */}
  <div className="flex-col ">
    <h2 className="mb-4 text-xl font-semibold">Top</h2>
    <p className="text-gray-600 md:mr-28">
      With the Top service, your accommodation will not only
      be highlighted compared to regular offers, but will also
      appear higher in the search results. When combined
      with the promotional price service, your offer will be
      much more attractive than the usual ones.
    </p>
  </div>
</div>
</div>

<div className="container p-6 mx-auto">
<h1 className="mb-6 text-2xl font-bold text-center"></h1>
<p className="max-w-3xl mx-auto mb-8 text-center text-gray-600">
  
</p>

<div className="flex flex-col items-start gap-8 md:flex-row">
  {/* Title and Description Section */}
  <div className="flex-1">
    <h2 className="mb-4 text-xl font-semibold">Premium</h2>
    <p className="text-gray-600 md:mr-28">
      Maximize your returns. Premium will get you to the very
      first positions in the search results. This service is
      limited, so only a certain number of accommodations
      can have it active.
    </p>
  </div>

  {/* Cards Section */}
  <div className="flex flex-col flex-1 gap-6 md:flex-row">
  <Cards/>
  <Cards/>
  </div>
</div>
</div>

    </div>
  )
}

export default ExtraServices
