import { useState } from 'react';
import { subscriptionApi } from '../pages/api';
import Button from './Button';
import toast from 'react-hot-toast';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setSubscribed] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const handleSubscribe = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await subscriptionApi(email);
    setLoading(false);
    setSubscribed(true);
    toast.success('Successfully Subscribed to the News Letter');
  };

  const subscribeContent = () => {
    return (
      <div className='flex w-full justify-center m-auto min-h-[20rem] flex-1 x-spacing bg-[#DDC6A4]'>
        {!isSubscribed ? (
          <div className='max-w-[40rem] text-center my-auto'>
            <h2 className='text-header'>
              Subscribe to our newsletter and be in touch.
            </h2>
            <form
              className='flex pt-4 pb-4'
              onSubmit={(e) => handleSubscribe(e)}
            >
              <input
                className='py-2 px-4 w-full outline-none'
                placeholder='Email Adress'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                required
              />
              <Button text='Subscribe' loading={isLoading} />
            </form>
          </div>
        ) : (
          <div className='max-w-[40rem] text-center my-auto'>
            <h2 className='text-header'>
              Thank you for subscribing to our new letter.
            </h2>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className='w-full flex flex-col justify-between'>
      {subscribeContent()}

      <div className='x-spacing flex flex-wrap py-6 flex-1 flex-col-reverse lg:flex-row'>
        <div className='flex flex-1 items-center'>
          <span className='logo'>nooby.</span>
          <p className='pl-2'>2022 Nooby Design, All Rights Reserved</p>
        </div>
        <div className='flex basis-1/2 md:flex-row flex-col'>
          <div className='basis-1/2'>
            <p className='uppercase pb-2'>Company</p>
            <ul className='footer-list'>
              <li>66 Mississaga St E, Orillia, ON L3V 1V5 Canada</li>
              <li>+17052596800</li>
              <li>customerinq@gmail.com</li>
            </ul>
          </div>
          <div className='basis-1/2'>
            <p className='uppercase pb-2'>Social Media</p>
            <ul className='footer-list'>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Linkedln</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
