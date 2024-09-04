"use client"
import React from 'react'

function Testimonials() {
    const TestimonialCard = ({ image, title, location, description, name, role }) => (
        <div className="flex-shrink-0 w-full m-4 overflow-hidden text-white bg-gray-800 rounded-lg shadow-lg sm:w-80">
          <img src={image} alt={title} className="object-cover w-full h-48" />
          <div className="p-6">
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <p className="mb-4 text-sm text-gray-400">{location}</p>
            <p className="mb-6 text-sm">{description}</p>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full">
                {/* Placeholder for user avatar */}
              </div>
              <div className="ml-3">
                <p className="font-medium">{name}</p>
                <p className="text-xs text-gray-400">{role}</p>
              </div>
            </div>
          </div>
        </div>
      );
      
  return (
    <div>
    <div className="px-6 py-12 bg-gray-900">
    <h2 className="mb-8 text-3xl font-bold text-center text-white">They said about us</h2>
    <div className="relative flex overflow-x-auto lg:overflow-visible snap-x">
      {/* Left arrow */}
      <button className="absolute left-0 z-10 items-center justify-center hidden w-10 h-10 -ml-5 text-white bg-gray-700 rounded-full lg:flex">
        &#8592;
      </button>
      
      {/* Testimonial Cards */}
      <div className="flex px-8 space-x-6 lg:px-20">
        <TestimonialCard
          image="/Pieniny.png"
          title="Bungalow in the heart of Liptov"
          location="Bungalow, Liptovská Mara, Slovakia"
          description="Despite the fact that Fiemso is a new accommodation portal, compared to competing websites on our market, it is far ahead of them."
          name="Gorazd"
          role="Owner"
        />
       
      </div>

      {/* Right arrow */}
      <button className="absolute right-0 z-10 items-center justify-center hidden w-10 h-10 -mr-5 text-white bg-gray-700 rounded-full lg:flex">
        &#8594;
      </button>
    </div>
  </div>
    </div>
  )
}

export default Testimonials
