import React from 'react';
import { BsFilter } from 'react-icons/bs';

const Title = () => {
  return (
    <div className='pt-20 lg:mx-20'>
      <h1 className='font-bold text-[#292A34] text-3xl mb-2'>Accommodation</h1>
      <p className='text-[#54555D] text-base mb-10'>
        See accommodation for rent at the best price directly from the accommodation provider.
      </p>

      <div className='flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 pb-10'>
        <div className='flex flex-wrap gap-2'>
          <button className='bg-[#E7EAEE] rounded-lg py-[9.5px] px-5'>Location</button>
          <button className='bg-[#E7EAEE] rounded-lg py-[9.5px] px-5'>Date from - to</button>
          <button className='bg-[#E7EAEE] rounded-lg py-[9.5px] px-5'>Number of persons</button>
          <button className='bg-[#E7EAEE] rounded-lg py-[9.5px] px-5 flex items-center'>
            <BsFilter className='mr-2' /> Filter
          </button>
        </div>

        <div className='flex flex-wrap gap-2 items-center'>
          <p className='text-sm'>Sort by:</p>

          <button
            id='dropdownDefaultButton'
            data-dropdown-toggle='dropdown'
            className='font-bold text-black rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            type='button'
          >
            Dropdown button
            <svg
              className='w-2.5 h-2.5 ml-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 1 4 4 4-4'
              />
            </svg>
          </button>

          <div
            id='dropdown'
            className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
          >
            <ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdownDefaultButton'>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button className='bg-[#E7EAEE] rounded-lg py-[9.5px] px-5 flex items-center'>
            <BsFilter className='mr-2' /> Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;
