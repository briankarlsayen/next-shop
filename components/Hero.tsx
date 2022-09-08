import React from 'react'

const Hero = () => {
  return (
    <div className='flex min-h-screen w-full md:flex-row flex-col'>
      <div className='x-spacing w-full my-auto flex flex-col md:basis-1/3 min-h-screen justify-center' id="hero-left">
        <div>
          <h1 className='text-6xl'>Be your best</h1>
          <h1 className='text-6xl'>Standout from the rest.</h1>
        </div>
        <div>
          <p className='py-4 text-xl'>Browse our latest collection of items to achive your full potential.</p>
        </div>
        <button className='bg-black text-white text-xl px-6 py-2 w-fit hover:bg-gray-700'>Shop now</button>
      </div>
      <div className='w-full h-full md:basis-2/3 min-h-screen'>
        <div className='h-full'>
          <img className='h-full object-cover w-full' src="https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
      </div>
    </div>
  )
}

export default Hero