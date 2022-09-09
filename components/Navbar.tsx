import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const linkLiClass = router.pathname === '/' ? 'text-white px-2 hover:text-gray-300' : 'text-black px-2'
  return (
    <div className={`h-[5rem] w-full bg-transparent flex flex-row items-center justify-between x-spacing ${router.pathname === '/' ? 'absolute': ''}`}>
      <span className='logo'>
        <Link href="/">
          nooby.
        </Link>
      </span>
      <div>
        <ul className='flex'>
          <li className={linkLiClass}>
            <Link href="/cart">
              Cart
            </Link>
          </li>
          <li className={linkLiClass}>
            <Link href="/shop">
              Shop
            </Link>
          </li>
          <li className={linkLiClass}>
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