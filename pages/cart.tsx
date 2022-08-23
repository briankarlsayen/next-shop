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
    <div>
      <p className='w-full'>Home / Cart</p>
      <div className='w-full flex flex-col items-center pb-20'>
        <h2 className='text-4xl pb-10 font-semibold'>Shopping Cart</h2>
        <div className='w-[80rem] border-2'>
          <div className='flex justify-between border-b-2 py-2'>
            <div className='basis-1/6'></div>
            <h3 className="basis-2/6 text-xl">Product</h3>
            <h3 className="basis-1/6 text-xl">Price</h3>
            <h3 className="basis-1/6 text-xl">Quantity</h3>
            <h3 className="basis-1/6 text-xl">Subtotal</h3>
          </div>
          <div className='py-4'>
            {items.map(item => {
              return(
                <ul className='flex justify-between py-2'>
                  <li className='basis-1/6 items-center flex justify-center'>
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
        <h2 className='text-4xl'>Cart Totals</h2>
      </div>
    </div>
  )
}

export default cart