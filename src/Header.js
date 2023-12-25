import React from 'react';
import CodeforcesLogo from './Images/CFLOGO.png'

const Header = () => {
  return (
    <div className='flex flex-col'>

        <div className='flex flex-row justify-between items-center px-6 pt-6'>
            <img src={CodeforcesLogo} alt="Codeforces" className='h-16'/> 
            <div className='flex flex-row justify-center items-center'>
                <button className='text-lg'>Enter | </button>
                <button className='text-lg px-2'>Register </button>
            </div>
        </div>
      
        <div className=' flex flex-row border border-gray-950 rounded-sm mt-4 mx-4 text-base justify-between'>
          <div className=''>
            <button className='px-1 md:px-2'>HOME</button>
            <button className='px-1 md:px-2'>TOP</button>
            <button className='px-1 md:px-2'>CATALOG</button>
            <button className='px-1 md:px-2'>GYM</button>
            <button className='px-1 md:px-2'>PROBLEMSET</button>
            <button className='px-1 md:px-2'>GROUPS</button>
            <button className='px-1 md:px-2'>RATING</button>
            <button className='px-1 md:px-2'>EDU</button>
            <button className='px-1 md:px-2'>API</button>
            <button className='px-1 md:px-2'>CALENDAR</button>
            <button className='px-1 md:px-2'>HELP</button>
            <button className='px-1 md:px-2'>ICPC CHALLENGE</button>
          </div>
          <div>
            <input type="search" placeholder='Search' className='bg-[#ffffff] w-28 rounded-md px-4 text-white border border-gray-700'/>
          </div>
        </div>
      
    </div>
  )
}

export default Header
