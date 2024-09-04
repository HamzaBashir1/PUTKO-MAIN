"use client"
import React from 'react'

function SimplicitySection() {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-auto lg:h-[590px]">
        {/* Left Half */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-l from-[#292A34] to-[#292A34] p-8 lg:p-0">
          <div className="px-4 py-10 text-white lg:px-8">
            <div className="max-w-md mx-auto">
              <h2 className="mb-4 text-2xl font-bold lg:text-3xl">Speed, clarity and simplicity</h2>
              <p className="text-md lg:text-lg">
                Our goal is to <span className="font-semibold">save your time</span> thanks to the simplicity
                and clarity of the system. We bring you an effective tool for acquiring new customers.
              </p>
            </div>
          </div>
        </div>

        {/* Right Half */}
        <div className="w-full lg:w-1/2 h-56 lg:h-auto flex items-center justify-center bg-gray-800 bg-[url('/s.png')] bg-cover bg-center">
          {/* Background Image Content */}
        </div>
      </div>
    </>
  )
}

export default SimplicitySection
