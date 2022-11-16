import React from 'react'
import beachVideo from '../assets/beachVid.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

function Hero() {
  return (
    <div className='w-full h-screen'>
      <video
        src={beachVideo}
        loop
        autoPlay
        muted
        className='w-full h-full object-cover'
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-white space-y-4 px-4'>
        <h1 className='text-5xl md:text-7xl'>First Class Travel</h1>
        <p className='text-2xl sm:text-3xl'>The best beaches in the world</p>
        <form className='flex justify-between items-center max-w-[600px] max-h[100px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
          <div>
            <input
              type='text'
              className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none'
              placeholder='Beach Search'
            />
          </div>
          <div>
            <button className='py-3'>
              <AiOutlineSearch className='w-[50px]' size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hero
