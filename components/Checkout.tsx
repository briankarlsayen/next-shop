import { useState } from 'react';
import FillBtn from '../components/FillBtn';
import { checkoutStore } from '../store/CheckoutStore';

const Checkout = () => {
  const [billing, setBilling] = useState({
    fullName: '',
    country: '',
    street: '',
    city: '',
    zcode: '',
    phone: '',
    email: '',
    shippingOpt: 'solo',
  });

  const { updateBilling, updateStep } = checkoutStore((state) => state);
  const updateField = (e: any) => {
    setBilling({
      ...billing,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateStep(2);
    updateBilling({ ...billing });
  };

  return (
    <>
      <div className='x-spacing py-8'>
        <form className='max-w-xl mx-auto' onSubmit={handleSubmit}>
          <div className='mx-auto flex sm:flex-row flex-col w-full gap-12'>
            <div className='w-full'>
              <div className='w-full'>
                <h2 className='text-header pb-4'>Billing Details</h2>
                <div className='flex flex-wrap -mx-3 mb-6'>
                  <div className='form-input-container'>
                    <label
                      className='block tracking-wide text-gray-700 text-subheader-uc mb-1'
                      htmlFor='fullName'
                    >
                      Full Name
                    </label>
                    <input
                      className='form-input'
                      name='fullName'
                      type='text'
                      id='fullName'
                      value={billing.fullName}
                      onChange={updateField}
                      required
                      autoComplete='off'
                    />
                  </div>
                  <div className='form-input-container'>
                    <label
                      className='block tracking-wide text-gray-700 text-subheader-uc mb-1'
                      htmlFor='country'
                    >
                      Country
                    </label>
                    <input
                      className='form-input'
                      name='country'
                      type='text'
                      id='country'
                      value={billing.country}
                      onChange={updateField}
                      required
                      autoComplete='off'
                    />
                  </div>
                  <div className='form-input-container'>
                    <label
                      className='block tracking-wide text-gray-700 text-subheader-uc mb-1'
                      htmlFor='street'
                    >
                      Street
                    </label>
                    <input
                      className='form-input'
                      name='street'
                      type='text'
                      id='street'
                      value={billing.street}
                      onChange={updateField}
                      required
                      autoComplete='off'
                    />
                  </div>
                  <div className='form-input-container'>
                    <label
                      className='block tracking-wide text-gray-700 text-subheader-uc mb-1'
                      htmlFor='city'
                    >
                      City
                    </label>
                    <input
                      className='form-input'
                      name='city'
                      type='text'
                      id='city'
                      value={billing.city}
                      onChange={updateField}
                      required
                      autoComplete='off'
                    />
                  </div>
                  <div className='form-input-container'>
                    <label
                      className='block tracking-wide text-gray-700 text-subheader-uc mb-1'
                      htmlFor='zcode'
                    >
                      Zip Code
                    </label>
                    <input
                      className='form-input'
                      name='zcode'
                      type='text'
                      id='zcode'
                      value={billing.zcode}
                      onChange={updateField}
                      required
                      autoComplete='off'
                    />
                  </div>
                  <div className='form-input-container'>
                    <label
                      className='block tracking-wide text-gray-700 text-subheader-uc mb-1'
                      htmlFor='phone'
                    >
                      Phone
                    </label>
                    <input
                      className='form-input'
                      name='phone'
                      type='text'
                      id='phone'
                      value={billing.phone}
                      onChange={updateField}
                      required
                      autoComplete='off'
                    />
                  </div>
                  <div className='form-input-container'>
                    <label
                      className='block tracking-wide text-gray-700 text-subheader-uc mb-1'
                      htmlFor='email'
                    >
                      Email Address
                    </label>
                    <input
                      className='form-input'
                      name='email'
                      type='email'
                      id='email'
                      value={billing.email}
                      onChange={updateField}
                      required
                      autoComplete='off'
                    />
                  </div>
                </div>
              </div>
              <FillBtn text='Next' type='submit' />
            </div>
          </div>
        </form>
      </div>
      <div className='border-b-2'></div>
    </>
  );
};

export default Checkout;
