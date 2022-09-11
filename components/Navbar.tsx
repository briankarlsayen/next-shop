import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='h-[5rem] w-full bg-gray-200 flex flex-row items-center justify-between x-spacing'>
      <span className='font-bold'>
        <Link href="/">
          NOOB STORE
        </Link>
      </span>
      <div>
        <ul className='flex'>
          <li className='px-2'>
            <Link href="/cart">
              Cart
            </Link>
          </li>
          <li className='px-2'>
            <Link href="/shop/all">
              Shop
            </Link>
          </li>
          <li className='px-2'>
            <Link href="/contact">
              Contact
            </Link>  
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar