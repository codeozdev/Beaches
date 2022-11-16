import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import KeyWest from '../assets/keywest.jpg'

function Destinations() {
  return (
    <div
      className='max-w-[1240px] mx-auto py-16 px-4 text-center'
      name='destination'
    >
      <h1 className='text-4xl font-bold'>All-Inclusive Resorts</h1>
      <p className='my-4 text-xl md:text-2xl'>Best beaches</p>
      <div className='grid grid-rows-none md:grid-cols-5 px-4 gap-2 md:gap-4'>
        <img
          src={BoraBora}
          alt=''
          className='w-full h-full object-cover col-span-2 row-span-2 md:col-span-3'
        />
        <img src={BoraBora2} alt='' className='w-full h-full object-cover' />
        <img src={Maldives} alt='' className='w-full h-full object-cover' />
        <img src={Maldives2} alt='' className='w-full h-full object-cover' />
        <img src={KeyWest} alt='' className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default Destinations
