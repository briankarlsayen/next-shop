import React from 'react'

const cart = () => {
  const items = [ 
    {
      label: "Piece of thingy",
      price: 24.5,
      quantity: 3,
    },
    {
      label: "Piece of thingyasdasfas aisudgiau",
      price: 14.5,
      quantity: 23,
    },
    {
      label: "Piece of thingy asdashoias daihd aiodhiaohdhasd ioad asidohas odias",
      price: 21.5,
      quantity: 31,
    }
  ]
  return (
    <div className='x-spacing'>
      <p className='w-full'>Home / Cart</p>
      <div className='max-w-[80rem] m-auto'>
        <div className='justify-center selection:w-full flex flex-col items-center pb-20'>
        <h2 className='text-4xl pb-12 font-semibold'>Shopping Cart</h2>
        <div className='max-w-[80rem] w-full border-2'>
          <div className='flex justify-between border-b-2 p-4'>
            <div className='md:block hidden basis-1/6'></div>
            <h3 className="basis-2/6 text-xl">Product</h3>
            <h3 className="basis-1/6 text-xl">Price</h3>
            <h3 className="basis-1/6 text-xl">Quantity</h3>
            <h3 className="basis-1/6 text-xl">Subtotal</h3>
          </div>
          <div className='py-4'>
            {items.map(item => {
              return(
                <ul className='flex justify-between p-4'>
                  <li className='md:flex hidden basis-1/6 items-center  justify-center'>
                    <div className='w-8 h-8 border-2'></div>
                  </li>
                  <li className='basis-2/6'>{item.label}</li>
                  <li className='basis-1/6'>${item.price}</li>
                  <li className='basis-1/6'>x{item.quantity}</li>
                  <li className='basis-1/6'>${item.price * item.quantity}</li>
                </ul>
              )
            })}
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-4xl pb-12 font-semibold'>Cart Totals</h2>
        <div className='max-w-[35rem] border-2'>
          <div className='flex justify-between p-4 border-b-2'>
            <h3 className='text-xl'>Subtotal</h3>
            <p>$776.13</p>
          </div>
          <div className='flex justify-between p-4 border-b-2'>
            <h3 className='text-xl'>Shipping</h3>
            <form>
              <ul>
                <li className='flex justify-between'>
                  <input type="radio" id="flat" value="flat" checked />
                  <label className='pl-2' htmlFor='flat'>Flat rate</label>
                </li>
                <li className='flex justify-between'>
                  <input  type="radio" id="free-ship" value="free-ship" />
                  <label className='pl-2' htmlFor='free-ship'>Free shipping</label>
                </li>
                <li className='flex justify-between'>
                  <input type="radio" id="local" value="local" />
                  <label className='pl-2' htmlFor='local'>Local pickup</label>
                </li>
              </ul>
            </form>
          </div>
          <div className='flex justify-between p-4'>
            <h3 className='text-xl'>Subtotal</h3>
            <p>$776.13</p>
          </div>
        </div>
      </div>
      <button className='bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 text-xl uppercase mt-6'>Proceed to checkout</button>
    </div>
      
    </div>
  )
}

export default cart