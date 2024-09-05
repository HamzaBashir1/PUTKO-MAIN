import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa' // Import the cross icon
import { PiInfoThin } from "react-icons/pi";
import label from '../../../../public/label.png'
import Image from 'next/image'

const StandardCard = () => {
  const features = [
    "Creating a presentation",
    "SMS notifications",
    "Last minute",
    "Promotions and discounts",
    "1 month TOP"
  ];

  return (
    <div className="relative max-w-lg p-4">
      {/* Top-right label */}
      <div className="absolute top-4 left-[271px] md:left-[403px] lg:left-[440px] right-0">
        <Image src={label} alt="Label" />
      </div>

      <div className="p-4 px-5 bg-white rounded-lg shadow-lg py-14">
        {/* <button className="bg-[#4FBE9F] text-white px-4 py-2 text-xs rounded-full">The most advantageous</button> */}
        <h1 className='text-[#292A34] text-lg md:text-xl mt-2'>
          Standard <span className='text-[#292A34] text-lg md:text-xl'>9 months</span>
        </h1>
        <p className='text-[#888888] text-xs md:text-sm mt-1'>only €16.55 per month</p>
        <div className='mt-4 space-y-2'>
          {features.map((item, index) => (
            <div key={index} className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                {index < 3 ? (
                  <FaCheck color='#292A34' /> // Show check icon for the first three items
                ) : (
                  <FaTimes color='#FF0000' /> // Show cross icon for the last two items
                )}
                <p className='text-[#292A34] text-xs md:text-sm'>{item}</p>
              </div>
              <PiInfoThin className='text-xs md:text-sm' />
            </div>
          ))}
        </div>
        <hr className='my-4' />
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-xs md:text-sm'>Together in <br /><span className='text-xs font-bold md:text-sm'>9 months</span></p>
          </div>
          <div className='text-right'>
            <span className='mr-2 text-xs text-red-500 line-through md:text-sm'>
              298€
            </span>
            <br />
            <span className='text-lg font-bold md:text-xl'>149€</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StandardCard