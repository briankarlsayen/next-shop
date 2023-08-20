import { useEffect, useState } from 'react';
import { CartItem } from '../types';
import { checkoutStore } from '../store/CheckoutStore';

const Order = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  const { billingInfo, paymentMethod } = checkoutStore((state) => state);
  console.log('billingInfo', billingInfo);

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
  const shipping = shippingOpts.find(
    (e) => billingInfo.shippingOpt === e.value
  )?.name;

  const orderDetails = {
    id: 'OR16941',
    createdAt: new Date(2022, 9, 16, 2, 37).toString(),
    totalPay: billingInfo.cartSubTotal,
    payMethod: paymentMethod,
    shipping,
  };

  return (
    <div className='w-full'>
      <div className='max-w-3xl mx-auto x-spacing min-h-screen'>
        <h2 className='text-4xl text-center py-12'>Order Confirmation</h2>
        {/* <h3 className='text-xl pb-4'>Thank you. Your order has been received.</h3> */}
        <div>
          <div className='flex'>
            <p className='basis-1/2'>Order number:</p>
            <span className='basis-1/2'>{orderDetails.id}</span>
          </div>
          <div className='flex'>
            <p className='basis-1/2'>Date:</p>
            <span className='basis-1/2'>{orderDetails.createdAt}</span>
          </div>
          <div className='flex'>
            <p className='basis-1/2'>Total:</p>
            <span className='basis-1/2'>${orderDetails.totalPay}</span>
          </div>
          <div className='flex'>
            <p className='basis-1/2'>Payment method:</p>
            <span className='basis-1/2 capitalize'>
              {orderDetails.payMethod}
            </span>
          </div>
        </div>
        <h3 className='text-header pt-8 pb-4'>Order details</h3>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <h4 className='text-subheader-uc basis-1/2'>Product</h4>
            <h4 className='text-subheader-uc basis-1/2'>Total</h4>
          </div>
          {items.map((item) => {
            return <OrderItem key={item.id} item={item} />;
          })}
          <div className='flex'>
            <h4 className='text-subheader-uc basis-1/2'>Subtotal</h4>
            <p>${billingInfo.cartSubTotal}</p>
          </div>
          <div className='flex'>
            <h4 className='text-subheader-uc basis-1/2'>Shipping</h4>
            <p className='basis-1/2'>{orderDetails.shipping}</p>
          </div>
          <div className='flex'>
            <h4 className='text-subheader-uc basis-1/2'>Payment Method</h4>
            <p className='basis-1/2 capitalize'>{orderDetails.payMethod}</p>
          </div>
          <div className='flex'>
            <h4 className='text-subheader-uc basis-1/2'>Total</h4>
            <p className='basis-1/2'>${billingInfo.cartSubTotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderItem = ({ item }: any) => {
  return (
    <div className='flex gap-x-3'>
      <p className='basis-1/2'>
        {item.title} <span>x {item.quantity}</span>
      </p>
      <p className='basis-1/2'>${item.subTotal}</p>
    </div>
  );
};

export default Order;
