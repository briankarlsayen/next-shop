import React from 'react'

const order = () => {
  return (
    <div className='w-full'>
      <p className='w-full x-spacing'>Home / Checkout / Order</p>
      <div className='max-w-[80rem] mx-auto x-spacing min-h-screen'>
        <h2 className='title text-center py-12'>Order Confirmation</h2>
        <h3 className='text-header pb-4'>Thank you. Your order has been received.</h3>
        <div>
          <p>Order number: <span className='font-bold'>14101</span></p>
          <p>Date: <span className='font-bold'>Sept. 1, 2022</span></p>
          <p>Total: <span className='font-bold'>$406.88</span></p>
          <p>Payment method: <span className='font-bold'>Direct bank transfer</span></p>
        </div>
        <h3 className='text-header pt-6 pb-4'>Order details</h3>
        <div className='flex flex-col gap-2'>
          
          <div className='flex justify-between'>
            <h4 className='text-subheader-uc'>Product</h4>
            <h4 className='text-subheader-uc'>Total</h4>
          </div>
          <div>
            <div className='flex justify-between'>
              <p>Kopiko Blanka <span>x 1</span></p>
              <p>$406.88</p>
            </div>
            <div className='flex justify-between'>
              <p>Kopiko Blanka <span>x 1</span></p>
              <p>$406.88</p>
            </div>
          </div>
          
          <div className='flex justify-between'>
            <h4 className='text-subheader-uc'>Subtotal</h4>
            <p>$406.88</p>
          </div>
          <div className='flex justify-between'>
            <h4 className='text-subheader-uc'>Shipping</h4>
            <p>Local pickup</p>
          </div>
          <div className='flex justify-between'>
            <h4 className='text-subheader-uc'>Payment Method</h4>
            <p>Direct bank transfer</p>
          </div>
          <div className='flex justify-between'>
            <h4 className='text-subheader-uc'>Total</h4>
            <p>$406.88</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default order