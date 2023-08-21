import React, { useState } from 'react';
import FillBtn from './FillBtn';
import { checkoutStore } from '../store/CheckoutStore';
import { cartStore } from '../store/CartStore';

const ProductItem = ({ item }: any) => {
  return (
    <li className='flex justify-between'>
      <p className='basis-2/3 pr-2'>
        ×{item.quantity} {item.title}
      </p>
      <p className='basis-1/3'>${item.subTotal}</p>
    </li>
  );
};

const OrderDetails = () => {
  const { cart, cartSubTotal } = cartStore((state) => state);
  const [shippingOpt, setShippingOpt] = useState('solo');

  const { updateBilling, updateStep } = checkoutStore((state) => state);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateStep(3);
    updateBilling({ shippingOpt, cartSubTotal });
  };

  const shippingOpts = [
    {
      name: 'Flat rate',
      value: 'solo',
    },
    {
      name: 'Free shipping',
      value: 'free-ship',
    },
    {
      name: 'Local pickup',
      value: 'local',
    },
  ];

  return (
    <div className='w-full flex flex-col justify-center items-center pb-8 pt-8'>
      <form className='max-w-xl w-full' onSubmit={handleSubmit}>
        <h2 className='text-header pb-4'>Your Order</h2>
        <div className='flex flex-col gap-4'></div>
        <div className='flex justify-between'>
          <h4 className='text-subheader-uc'>Product</h4>
          <h4 className='text-subheader-uc basis-1/3'>Subtotal</h4>
        </div>
        <div>
          <ul>
            {cart.length
              ? cart.map((item: any) => {
                  return <ProductItem key={item.id} item={item} />;
                })
              : null}
          </ul>
        </div>
        <div className='flex justify-between'>
          <h4 className='text-subheader-uc'>Subtotal</h4>
          <p className='basis-1/3'>${cartSubTotal}</p>
        </div>
        <div className='flex justify-between'>
          <h4 className='text-subheader-uc basis-2/3'>Shipping</h4>
          <div className='basis-1/3'>
            <ul>
              {shippingOpts.map((opt) => {
                return (
                  <li className='flex' key={opt.value}>
                    <label htmlFor='shippingOpt'>
                      <input
                        className='mr-2'
                        type='radio'
                        name='shippingOpt'
                        id='shippingOpt'
                        value={opt.value}
                        onChange={(e) => setShippingOpt(e.target.value)}
                        checked={shippingOpt === opt.value}
                      />
                    </label>
                    {opt.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className='flex justify-between pb-8'>
          <h4 className='text-subheader-uc'>Total</h4>
          <p className='basis-1/3'>${cartSubTotal}</p>
        </div>
        <FillBtn text='Next' type='submit' />
      </form>
    </div>
  );
};

export default OrderDetails;
