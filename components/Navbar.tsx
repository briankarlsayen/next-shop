import React from 'react'

function Navbar() {
  return (
    <div className='h-[5rem] w-full bg-gray-200 flex flex-row items-center justify-between'>
      <span className='px-2 font-bold'>NOOB STORE</span>
      <div>
        <ul className='flex'>
          <li className='px-2'>Items</li>
          <li className='px-2'>Promo</li>
          <li className='px-2'>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar