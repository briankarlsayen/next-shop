import React from 'react'
import FillBtn from '../components/FillBtn'
const FourOhFour = () => {
  return (
    <div className='text-center h-[calc(100vh-5rem)] m-auto justify-center align-middle items-center flex flex-col'>
      <h1 className='md:text-9xl text-6xl text-custom-green pb-4'>404</h1>
      <h3 className='md:text-2xl text-lg'>Oops! nothing to see here.</h3>
      <p className='md:text-base text-sm'>The page you want to access is unavailable or does not exist</p>
      <FillBtn text="Return to home" url="/" />
    </div>
  )
}

export default FourOhFour