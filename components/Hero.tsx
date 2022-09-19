import React from 'react'
import Link from "next/link"

const Hero = () => {
  return (
    <div className='flex min-h-screen w-full md:flex-row flex-col'>
      <div className='x-spacing w-full my-auto flex flex-col md:basis-1/3 min-h-screen justify-center' id="hero-left">
        <div>
          <h1 className='hero-title hero-title-font'>Be your <span className='blue-config uppercase'>best</span></h1>
          <h1 className='hero-title hero-title-font'>Standout from the <span className='blue-config uppercase'>rest</span>.</h1>
        </div>
        <div>
          <p className='py-6 hero-subtitle'>Browse our latest collection of items to achive your full potential.</p>
        </div>
        <button className='hero-btn'>
          <Link href='/shop/all' >
            Shop now
          </Link>
        </button>
      </div>
      <div className='w-full md:basis-2/3 h-screen'>
        <div className='h-full'>
          <img className='h-full object-cover w-full' src="https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
      </div>
    </div>
  )
}

export default Hero