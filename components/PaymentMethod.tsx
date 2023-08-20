import React, { useState } from 'react';
import FillBtn from './FillBtn';

function PaymentMethod() {
  const [payMethod, setPayMethod] = useState('paypal');

  const paymentMethods = [
    {
      id: 1,
      name: 'Paypal',
      value: 'paypal',
    },
    {
      id: 2,
      name: 'Credit card',
      value: 'credit-card',
    },
    {
      id: 3,
      name: 'Cash',
      value: 'cash',
    },
  ];
  return (
    <div className='x-spacing py-20 flex flex-col justify-center items-center'>
      <div className='max-w-xl w-full'>
        <h2 className='text-header pb-4'>Payment Method</h2>
        <ul>
          {paymentMethods.map((method: any) => {
            return (
              <li className='flex' key={method.id}>
                <label htmlFor='payMethod'>
                  <input
                    className='mr-2'
                    type='radio'
                    name='payMethod'
                    id='payMethod'
                    value='solo'
                    onChange={(e) => setPayMethod(method.value)}
                    checked={payMethod === method.value}
                  />
                </label>
                {method.name}
              </li>
            );
          })}
        </ul>
        <FillBtn url='/' text='Next' />
      </div>
    </div>
  );
}

export default PaymentMethod;
