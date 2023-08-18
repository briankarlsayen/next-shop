import { PayPalButtons } from '@paypal/react-paypal-js';
import React, { useEffect, useState } from 'react';
import FillBtn from './FillBtn';
function PaypalBtn({
  cartSubTotal,
  handleSubmit,
  isValid,
  checkForm,
  billing,
}: any) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
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
          onInit: function (data, actions) {
            // Disable the buttons

            if (isValid) {
              actions.enable();
            } else {
              actions.disable();
            }
            // if (isValid) {
            // }

            // Listen for changes to the input
            //   document.querySelector('#userForm input')
            //     .addEventListener('blur', function(event) {
            //       if (validateFields()) {
            //         actions.enable();
            //       }
            //     });
          },
          onClick: function (data, actions) {
            console.log('isValid 22', isValid);
            // console.log('data', data);
            checkForm();
            // actions.reject();
          },
        })
        .render('#paypal-buttons-container');
      document
        .querySelectorAll('input[name=payment-option]')
        .forEach(function (el) {
          el.addEventListener('change', function (event: any) {
            // If PayPal is selected, show the PayPal button
            let alternateBtnContainer,
              paypalBtnContainer = null;
            if (event.target?.value === 'paypal') {
              alternateBtnContainer = document.body.querySelector<HTMLElement>(
                '#alternate-button-container'
              );
              if (alternateBtnContainer) {
                alternateBtnContainer.style.display = 'none';
              }
              paypalBtnContainer = document.body.querySelector<HTMLElement>(
                '#paypal-buttons-container'
              );
              if (paypalBtnContainer) {
                paypalBtnContainer.style.display = 'block';
              }
            }

            // If alternate funding is selected, show a different button
            if (event.target?.value === 'alternate') {
              alternateBtnContainer = document.body.querySelector<HTMLElement>(
                '#alternate-button-container'
              );
              if (alternateBtnContainer) {
                alternateBtnContainer.style.display = 'block';
              }
              paypalBtnContainer = document.body.querySelector<HTMLElement>(
                '#paypal-buttons-container'
              );
              if (paypalBtnContainer) {
                paypalBtnContainer.style.display = 'none';
              }
            }
          });
        });

      // Hide non-PayPal button by default
      const nonPaypal = document.body.querySelector<HTMLElement>(
        '#alternate-button-container'
      );
      if (nonPaypal) {
        nonPaypal.style.display = 'none';
      }
    }
  }, [scriptLoaded]);
  return scriptLoaded ? (
    <Btns handleSubmit={handleSubmit} checkForm={checkForm} isValid={isValid} />
  ) : null;
  // return scriptLoaded ? <div id='paypal-button-container'></div> : null;
}

const Btns = ({ handleSubmit, checkForm, isValid }: any) => {
  const handlePaypalBtnClick = () => {
    console.log('click...');
    checkForm();
  };
  const handleCashBtn = (e: any) => {
    console.log('click2', isValid);
    handleSubmit(e);
  };
  return (
    <div>
      <h2 className='text-2xl pb-2'>Payment Method</h2>
      <label className='flex'>
        <input type='radio' name='payment-option' value='paypal' checked />
        <div id='paypal-marks-container'></div>
      </label>

      <label className='flex'>
        <input type='radio' name='payment-option' value='alternate' />
        <p className='pl-2'>Pay with cash</p>
      </label>
      <div className='pt-4 w-full'>
        <div
          id='paypal-buttons-container'
          onClick={() => console.log('hahahaha')}
        ></div>
        <div id='alternate-button-container' onClick={handleCashBtn}>
          <FillBtn text='Cash' url='' />
        </div>
      </div>
    </div>
  );
};

export default PaypalBtn;
