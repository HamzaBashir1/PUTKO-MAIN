import React from 'react'
import Image from 'next/image'
import { ImSpoonKnife } from "react-icons/im";
import location from '../../../../public/location.png'

const Location = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl'>Location</h1>
      <p className=' bg-slate-200'>Slovakia / Martin district / Bela - Dulice</p>

      <Image src={location}/>

      <p>
        <span className='font-bold'>Villa LIMACO Jasenská Dolina</span>
        Villa LIMACO Jasenská Dolina is located in the area of ​​Jasenská Dolina on the outskirts of the village of
Turčianske Jaseno, just 1 km from the Jasenská Dolina Ski Center and the Jasenská Bike Park. You can also Show More
      </p>

      <hr/>
      <div>
      <div className='flex flex-row'>
        <div className='bg-slate-200'>
         <ImSpoonKnife />
        </div>
        <p>Ressturant</p>
      </div>
      </div>
    </div>
  )
}

export default Location
