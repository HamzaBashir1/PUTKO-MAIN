"use client"
import React from 'react'

function Testimonials() {
    const TestimonialCard = ({ image, title, location, description, name, role }) => (
        <div className="flex-shrink-0 w-full sm:w-80 bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg m-4">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-400 mb-4">{location}</p>
            <p className="text-sm mb-6">{description}</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
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
    <div className="bg-gray-900 py-12 px-6">
    <h2 className="text-center text-3xl text-white font-bold mb-8">They said about us</h2>
    <div className="relative flex overflow-x-auto lg:overflow-visible snap-x">
      {/* Left arrow */}
      <button className="hidden lg:flex absolute left-0 z-10 bg-gray-700 text-white rounded-full w-10 h-10 items-center justify-center -ml-5">
        &#8592;
      </button>
      
      {/* Testimonial Cards */}
      <div className="flex space-x-6 px-8 lg:px-20">
        <TestimonialCard
          image="/Pieniny.png"
          title="Bungalow in the heart of Liptov"
          location="Bungalow, Liptovská Mara, Slovakia"
          description="Despite the fact that Fiemso is a new accommodation portal, compared to competing websites on our market, it is far ahead of them."
          name="Gorazd"
          role="Owner"
        />
        <TestimonialCard
          image="/Pieniny.png"
          title="Modern Tiny house with sauna in Liptov countryside"
          location="Cottage, Liptovská Mara, Slovakia"
          description="I really like the clear and modern website of Fiemso. I would especially highlight the pairing of the calendar with other services."
          name="Gorazd"
          role="Owner"
        />
        <TestimonialCard
          image="/Pieniny.png"
          title="Sweet Home"
          location="Cottage, Topoľčany, Slovakia"
          description="I would like to thank you for your professionalism and prompt solution to various situations in terms of help and support."
          name="Ingrid"
          role="Owner"
        />
        <TestimonialCard
          image="/Pieniny.png"
          title="Sweet Home"
          location="Cottage, Topoľčany, Slovakia"
          description="I would like to thank you for your professionalism and prompt solution to various situations in terms of help and support."
          name="Ingrid"
          role="Owner"
        />
        
      </div>

      {/* Right arrow */}
      <button className="hidden lg:flex absolute right-0 z-10 bg-gray-700 text-white rounded-full w-10 h-10 items-center justify-center -mr-5">
        &#8594;
      </button>
    </div>
  </div>
    </div>
  )
}

export default Testimonials
