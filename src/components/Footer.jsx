import React from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa'

function Footer() {
  return (
    <div className='w-full bg-gray-100 py-6 sm:py-16'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <div className='sm:flex justify-between items-center text-center'>
          <h1 className='text-4xl font-bold'>BEACHES</h1>
          <div className='flex justify-between w-full sm:max-w-[300px] text-2xl text-[var(--primary-dark)] my-6 sm:my-0 px-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <div className='mt-4 font-bold'>
          <div className=''>
            <ul className='flex items-center justify-center sm:justify-start sm:space-x-4 space-x-2 text-sm sm:text-base'>
              <li>About</li>
              <li>Partnerships</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Advertising</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
