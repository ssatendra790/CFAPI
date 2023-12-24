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
      
        <div className='flex flex-row border border-gray-950 p-1 rounded-sm mt-4 mx-4 text-base'>
            <button className='p-3 fnot'>HOME</button>
            <button className='p-3'>TOP</button>
            <button className='p-3'>CATALOG</button>
            <button className='p-3'>GYM</button>
            <button className='p-3'>PROBLEMSET</button>
            <button className='p-3'>GROUPS</button>
            <button className='p-3'>RATING</button>
            <button className='p-3'>EDU</button>
            <button className='p-3'>API</button>
            <button className='p-3'>CALENDAR</button>
            <button className='p-3'>HELP</button>
            <button className='p-3'>ICPC CHALLENGE</button>
            {/* <input type="search" placeholder='Search' className='bg-[#5e5e5e] w-28 rounded-md px-5 text-white'></input> */}
        </div>
      
    </div>
  )
}

export default Header
