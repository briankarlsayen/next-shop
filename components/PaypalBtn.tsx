import { PayPalButtons } from '@paypal/react-paypal-js';
import React, { useEffect, useState } from 'react';
import FillBtn from './FillBtn';
import { checkoutStore } from '../store/CheckoutStore';
import { useRouter } from 'next/router';
import { cartStore } from '../store/CartStore';
import { emptyCartApi } from '../utils/db';

function PaypalBtn() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isPaypal, setPaypal] = useState(true);
  const { updatePaymentMethod, updateStep } = checkoutStore((state) => state);
  const { cartSubTotal, updateCart } = cartStore((state) => state);

  const router = useRouter();
  const url = router.pathname;
  useEffect(() => {
    const addPaypalScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=AZycadIyBu7vdk9nCzEtkDvV8L8Ac2cadOdWdTjdU35rFvUxkgAWsPoYoimdHSkz5TKbjXv1g0o31C1B&components=buttons,marks`;
      // script.src = `https://www.paypal.com/sdk/js?client-id=AZycadIyBu7vdk9nCzEtkDvV8L8Ac2cadOdWdTjdU35rFvUxkgAWsPoYoimdHSkz5TKbjXv1g0o31C1B`;
      script.async = true;

      script.onload = () => setScriptLoaded(true);

      document.body.appendChild(script);
    };
    addPaypalScript();
  }, []);

  useEffect(() => {
    if (window?.paypal?.Buttons && window?.paypal.Marks) {
      window?.paypal.Marks().render('#paypal-marks-container');
      window?.paypal
        .Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: cartSubTotal.toString(),
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions): any {
            return actions.order?.capture().then(function (details) {
              handleSubmit();
            });
          },
        })
        .render('#paypal-buttons-container');
    }
  }, [scriptLoaded]);

  const handleUpdate = (e: any) => {
    if (e?.target?.value === 'cash') {
      setPaypal(false);
    } else {
      setPaypal(true);
    }
    updatePaymentMethod(e?.target?.value);
  };

  const handleSubmit = () => {
    updateStep(1);
    router.push({
      pathname: '/checkout/order',
      query: {
        cartSubTotal,
      },
    });
    emptyCartApi();
    updateCart([]);
  };

  return scriptLoaded ? (
    <Btns
      isPaypal={isPaypal}
      setPaypal={setPaypal}
      handleUpdate={handleUpdate}
      url={url}
      handleSubmit={handleSubmit}
    />
  ) : (
    <div className='h-[20vh] flex items-center justify-center font-semibold text-2xl'>
      Loading...
    </div>
  );
}

const Btns = ({
  isPaypal,
  setPaypal,
  handleUpdate,
  url,
  handleSubmit,
}: any) => {
  const hiddenBtn = 'hidden';
  const showBtn = 'block';
  return url === '/checkout' ? (
    <div className='x-spacing py-8 flex flex-col justify-center items-center z-10'>
      <div className='max-w-xl w-full'>
        <h2 className='text-header pb-4'>Payment Method</h2>
        <ul>
          <li>
            <label className='flex'>
              <input
                type='radio'
                name='payment-option'
                value='paypal'
                onChange={handleUpdate}
                checked={isPaypal}
              />
              <div id='paypal-marks-container'></div>
            </label>
          </li>
          <li>
            <label className='flex'>
              <input
                type='radio'
                name='payment-option'
                value='cash'
                onChange={handleUpdate}
                checked={!isPaypal}
              />
              <p className='pl-2'>Pay with cash</p>
            </label>
          </li>
        </ul>

        <div className='pt-4 w-full'>
          <div
            id='paypal-buttons-container'
            className={isPaypal ? showBtn : hiddenBtn}
          ></div>
          <div
            id='alternate-button-container'
            className={!isPaypal ? showBtn : hiddenBtn}
          >
            <FillBtn text='Cash' handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default PaypalBtn;
