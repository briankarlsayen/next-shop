import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <div className={`h-[5rem] w-full bg-transparent flex flex-row items-center justify-between x-spacing ${router.pathname === '/' ? 'absolute': ''}`}>
      <span className='font-bold text-2xl'>
        <Link href="/">
          Nooby
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
            <Link href="/shop">
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