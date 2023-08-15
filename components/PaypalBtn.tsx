import { PayPalButtons } from '@paypal/react-paypal-js';
import React, { useEffect, useState } from 'react';
function PaypalBtn({ cartSubTotal }: any) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  useEffect(() => {
    const addPaypalScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=AZycadIyBu7vdk9nCzEtkDvV8L8Ac2cadOdWdTjdU35rFvUxkgAWsPoYoimdHSkz5TKbjXv1g0o31C1B`;
      script.async = true;

      script.onload = () => setScriptLoaded(true);

      document.body.appendChild(script);
    };
    addPaypalScript();
    if (window?.paypal) {
    }
  }, []);

  const DEFAULT_AMOUNT = 256;

  useEffect(() => {
    if (window?.paypal?.Buttons) {
      window?.paypal
        ?.Buttons({
          // Order is created on the server and the order id is returned
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: cartSubTotal,
                  },
                },
              ],
            });
          },
          // Finalize the transaction on the server after payer approval
          onApprove: function (data, actions) {
            return actions.order?.capture().then(function (details) {
              alert(
                'Transaction completed by ' + details.payer.name?.given_name
              );
            }) as any;
          },
        })
        .render('#paypal-button-container');
    }
  }, [scriptLoaded]);
  console.log('scriptLoaded', scriptLoaded);
  return scriptLoaded ? (
    // <PayPalScriptProvider
    //   options={{
    //     clientId:
    //       'AZycadIyBu7vdk9nCzEtkDvV8L8Ac2cadOdWdTjdU35rFvUxkgAWsPoYoimdHSkz5TKbjXv1g0o31C1B',
    //   }}
    // >
    // <></>
    <div id='paypal-button-container'></div>
  ) : // </PayPalScriptProvider>
  null;
}

export default PaypalBtn;
