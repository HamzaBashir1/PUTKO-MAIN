"use client"
import React, { useState } from 'react';

import Image from 'next/image';
import { BsBox, BsPersonBadgeFill, BsStar } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';
import { BiHeart, BiUpload } from 'react-icons/bi';
import map from '../../../../public/map.png';

const Persons = () => {
  
const images = [
  '/bedroom.jpg',
  '/bedroom.jpg',
  '/bedroom.jpg',
  '/bedroom.jpg',
  '/bedroom.jpg',
  '/bedroom.jpg',
  '/bedroom.jpg',
];
const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="container p-6 mx-auto">

    <h2 className="mb-4 text-xl font-semibold">Accommodation</h2>
    <p className="mb-6 text-gray-600">
      3 bedrooms | 1 living room | 2 kitchens | 3 bathrooms | 1 WC
    </p>
    
    <div className="p-8 bg-white">
    {/* Image Carousel */}
    <div className="relative flex flex-row w-full mb-8">
        {/* Main Image */}
        <div className="w-1/2 pr-2">
            <img
                src={images[currentIndex]}
                alt="Property"
                className="w-full h-auto rounded-lg"
            />
        </div>
        {/* Thumbnails */}
        <div className="grid w-1/2 grid-cols-2 gap-2">
            {images.slice(0, 4).map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`rounded-md cursor-pointer ${
                        index === currentIndex ? 'border-2 border-black opacity-100' : 'opacity-60'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                />
            ))}
        </div>
        {/* See All Photos Button */}
        <button
            onClick={() => alert('See all photos clicked!')}
            className="absolute px-4 py-2 text-black bg-white border border-black rounded-md bottom-2 right-2"
        >
            See All Photos
        </button>
    </div>
    </div>
    </div>
  )
}

export default Persons
