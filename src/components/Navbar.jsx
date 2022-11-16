import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa'
import { Link } from 'react-scroll'

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleClick = () => {
    setNav(!nav)
  }

  return (
    <div className='w-full flex justify-between items-center py-12 px-8 absolute text-white z-40'>
      <div className='cursor-pointer'>
        <h1 className='text-4xl font-bold'>BEACHES</h1>
      </div>
      <div className='hidden md:flex cursor-pointer'>
        <ul className='flex justify-center items-center space-x-6 text-xl'>
          <li>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to='destination' smooth={true} duration={500}>
              Destinations
            </Link>
          </li>
          <li>
            <Link to='service' smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to='beach' smooth={true} duration={500}>
              Beaches
            </Link>
          </li>
          <li>
            <Link to='picture' smooth={true} duration={500}>
              Pictures
            </Link>
          </li>
        </ul>
      </div>
      <div className='justify-center items-center space-x-6 cursor-pointer z-10 hidden sm:flex'>
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>

      {/* Mobile Screen */}
      <div className='cursor-pointer z-10 sm:hidden' onClick={handleClick}>
        {!nav ? (
          <HiOutlineMenuAlt4 className='text-black' size={20} />
        ) : (
          <AiOutlineClose className='text-white' size={20} />
        )}
      </div>
      <div
        className={
          !nav
            ? 'absolute left-0 top-0 w-full px-6 sm:hidden bg-gray-100/90 text-black'
            : 'hidden'
        }
      >
        <ul className='space-y-4 mt-32 text-xl'>
          <li className='py-2 border-b border-b-gray-300'>Home</li>
          <li className='py-2 border-b border-b-gray-300'>Destinations</li>
          <li className='py-2 border-b border-b-gray-300'>Travel</li>
          <li className='py-2 border-b border-b-gray-300'>View</li>
        </ul>
        <div className='w-full flex flex-col items-center'>
          <button className='mt-4 my-2 py-4 w-full'>Search</button>
          <button className='my-2 py-4 w-full'>Account</button>
        </div>
        <div className='flex justify-between items-center my-4 px-4 cursor-pointer text-2xl text-[var(--primary-dark)]'>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaPinterest />
          <FaYoutube />
        </div>
      </div>
    </div>
  )
}

export default Navbar
