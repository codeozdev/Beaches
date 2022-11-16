import React from 'react'
import { RiCustomerService2Line } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

function Search() {
  return (
    <div
      className='max-w-[1240px] mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-4'
      name='beach'
    >
      <div className='col-span-2 flex flex-col justify-evenly px-4'>
        <h1 className='text-3xl font-bold'>
          LUXURY INCLUDED VACATIONS FOR TWO PEOPLE
        </h1>
        <p className='py-4'>
          Come experience the very pinnacle of luxury Caribbean all-inclusive
          vacations for couples at BEACHES Resorts. Our luxury beach resorts,
          set along the most gorgeous tropical settings and exquisite beaches in
          Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
          Curaçao, feature unlimited gourmet dining, unique bars serving premium
          liquors and wines, and every land and water sport, including
          complimentary green fees at our golf resorts and certified scuba
          diving at most resorts. If you are planning a wedding, BEACHES is the
          leader in Caribbean destination weddings and honeymoon packages.
        </p>
        <div className='grid sm:grid-cols-2 gap-8 px-4 my-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Line size={50} />
            </button>

            <div className='my-4'>
              <h3 className='font-bold text-2xl uppercase'>Leading Services</h3>
              <p className='py-1 font-medium text-sm'>
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>

            <div className='my-4'>
              <h3 className='font-bold text-2xl uppercase'>Leading Services</h3>
              <p className='py-1 font-medium text-sm'>
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className='w-full text-center'>
        <div className='border'>
          <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
          <p className='py-4'>12 HOURS LEFT</p>
          <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
          <div className='flex flex-col my-2 bg-transparent'>
            <label>Destination</label>
            <select className='border rounded-md bg-transparent p-2'>
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>

            <div className='flex flex-col'>
              <label>Check-In</label>
              <input
                type='date'
                className='border rounded-md bg-transparent p-2'
              />
            </div>
            <div className='flex flex-col'>
              <label>Check-Out</label>
              <input
                type='date'
                className='border rounded-md bg-transparent p-2'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Search
