import { useState, useEffect } from 'react';
import FillBtn from '../components/FillBtn';
import { CartItem, ErrorInputProps } from '../types';
import Router from 'next/router';
import PaypalBtn from './PaypalBtn';

const Checkout = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [redirect, setRedirect] = useState('');
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
  const [errorInput, setErrorInput] = useState({
    fullName: false,
    country: false,
    street: false,
    city: false,
    zcode: false,
    phone: false,
    email: false,
  });

  const [payMethod, setPayMethod] = useState('paypal');
  const [isValid, setIsValid] = useState(false);

  // * get items data
  useEffect(() => {
    const cartItems = localStorage.getItem('cart');
    if (cartItems) {
      let parsedCart = JSON.parse(cartItems);
      setItems(parsedCart);
      cartFinalSubTotal(parsedCart);
    }
  }, []);

  const cartFinalSubTotal = (totalArr: CartItem[]) => {
    let totalArrSum = 0;
    for (let value of totalArr) {
      totalArrSum = parseFloat((totalArrSum + value.subTotal).toFixed(2));
    }
    setCartSubTotal(totalArrSum);
  };

  const updateField = (e: any) => {
    console.log('hey');
    setIsValid(checkForm);
    setBilling({
      ...billing,
      [e.target.name]: e.target.value,
    });
  };

  const checkForm = () => {
    console.log('check...');
    console.log('billing', billing);
    const filteredArr: any[] = [];
    Object.entries(billing).map(([key, value]) => {
      if (value === '') filteredArr.push(key);
    });

    const errorItemsArr: any[] = [];
    const goodItemsArr: any[] = [];
    Object.entries(errorInput).map(([key, value]) => {
      if (filteredArr.includes(key)) {
        errorItemsArr.push([key, true]);
      } else {
        goodItemsArr.push([key, false]);
      }
    });
    const errorData: any = Object.fromEntries(errorItemsArr);
    const goodData: any = Object.fromEntries(goodItemsArr);
    const newData = Object.assign(errorData, goodData);
    console.log('newData', newData);
    setErrorInput(newData);

    return filteredArr.length === 0;
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isValid = checkForm();
    console.log('isValid', isValid);
    // if (isValid) {
    //   Router.push('/checkout/order');
    // }
  };

  const errorClass = '!border-red-500';

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
    <>
      <div className='x-spacing py-20'>
        <form className='max-w-[80rem] mx-auto' onSubmit={handleSubmit}>
          <div className='mx-auto flex sm:flex-row flex-col w-full gap-12'>
            <OrderDetails
              items={items}
              cartSubTotal={cartSubTotal}
              billing={billing}
              setBilling={setBilling}
              paymentMethods={paymentMethods}
              payMethod={payMethod}
              setPayMethod={setPayMethod}
            />
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
                      className={`form-input ${
                        errorInput.fullName ? errorClass : ''
                      }`}
                      name='fullName'
                      type='text'
                      id='fullName'
                      value={billing.fullName}
                      onChange={updateField}
                      required
                      autoComplete='off'
                    />
                    <span
                      className={`form-error-msg ${
                        errorInput.fullName ? 'block' : '!hidden'
                      }`}
                    >
                      Full name is required
                    </span>
                  </div>
                  <div className='form-input-container'>
                    <label
                      className='block tracking-wide text-gray-700 text-subheader-uc mb-1'
                      htmlFor='country'
                    >
                      Country
                    </label>
                    <input
                      className={`form-input ${
                        errorInput.country ? errorClass : ''
                      }`}
                      name='country'
                      type='text'
                      id='country'
                      value={billing.country}
                      onChange={updateField}
                      required
                      autoComplete='off'
                    />
                    <span
                      className={`form-error-msg ${
                        errorInput.country ? 'block' : '!hidden'
                      }`}
                    >
                      Country is required
                    </span>
                  </div>
                  <div className='form-input-container'>
                    <label
                      className='block tracking-wide text-gray-700 text-subheader-uc mb-1'
                      htmlFor='street'
                    >
                      Street
                    </label>
                    <input
                      className={`form-input ${
                        errorInput.street ? errorClass : ''
                      }`}
                      name='street'
                      type='text'
                      id='street'
                      value={billing.street}
                      onChange={updateField}
                      required
                      autoComplete='off'
                    />
                    <span
                      className={`form-error-msg ${
                        errorInput.street ? 'block' : '!hidden'
                      }`}
                    >
                      Street is required
                    </span>
                  </div>
                  <div className='form-input-container'>
                    <label
                      className='block tracking-wide text-gray-700 text-subheader-uc mb-1'
                      htmlFor='city'
                    >
                      City
                    </label>
                    <input
                      className={`form-input ${
                        errorInput.city ? errorClass : ''
                      }`}
                      name='city'
                      type='text'
                      id='city'
                      value={billing.city}
                      onChange={updateField}
                      required
                      autoComplete='off'
                    />
                    <span
                      className={`form-error-msg ${
                        errorInput.city ? 'block' : '!hidden'
                      }`}
                    >
                      City is required
                    </span>
                  </div>
                  <div className='form-input-container'>
                    <label
                      className='block tracking-wide text-gray-700 text-subheader-uc mb-1'
                      htmlFor='zcode'
                    >
                      Zip Code
                    </label>
                    <input
                      className={`form-input ${
                        errorInput.zcode ? errorClass : ''
                      }`}
                      name='zcode'
                      type='text'
                      id='zcode'
                      value={billing.zcode}
                      onChange={updateField}
                      required
                      autoComplete='off'
                    />
                    <span
                      className={`form-error-msg ${
                        errorInput.zcode ? 'block' : '!hidden'
                      }`}
                    >
                      Zip Code is required
                    </span>
                  </div>
                  <div className='form-input-container'>
                    <label
                      className='block tracking-wide text-gray-700 text-subheader-uc mb-1'
                      htmlFor='phone'
                    >
                      Phone
                    </label>
                    <input
                      className={`form-input ${
                        errorInput.phone ? errorClass : ''
                      }`}
                      name='phone'
                      type='text'
                      id='phone'
                      value={billing.phone}
                      onChange={updateField}
                      required
                      autoComplete='off'
                    />
                    <span
                      className={`form-error-msg ${
                        errorInput.phone ? 'block' : '!hidden'
                      }`}
                    >
                      Phone is required
                    </span>
                  </div>
                  <div className='form-input-container'>
                    <label
                      className='block tracking-wide text-gray-700 text-subheader-uc mb-1'
                      htmlFor='email'
                    >
                      Email Address
                    </label>
                    <input
                      className={`form-input ${
                        errorInput.email ? errorClass : ''
                      }`}
                      name='email'
                      type='email'
                      id='email'
                      value={billing.email}
                      onChange={updateField}
                      required
                      autoComplete='off'
                    />
                    <span
                      className={`form-error-msg ${
                        errorInput.email ? 'block' : '!hidden'
                      }`}
                    >
                      Email Address is required
                    </span>
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <PaypalBtn
                  cartSubTotal={cartSubTotal}
                  handleSubmit={handleSubmit}
                  isValid={isValid}
                  checkForm={checkForm}
                  billing={billing}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='border-b-2'></div>
    </>
  );
};

// const

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

const OrderDetails = ({
  items,
  cartSubTotal,
  billing,
  setBilling,
  paymentMethods,
  payMethod,
  setPayMethod,
}: any) => {
  return (
    <div className='w-full'>
      <h2 className='text-header pb-4'>Your Order</h2>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between'>
          <h4 className='text-subheader-uc'>Product</h4>
          <h4 className='text-subheader-uc basis-1/3'>Subtotal</h4>
        </div>
        <div>
          <ul>
            {items.length
              ? items.map((item: any) => {
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
              <li className='flex'>
                <label htmlFor='shippingOpt'>
                  <input
                    className='mr-2'
                    type='radio'
                    name='shippingOpt'
                    id='shippingOpt'
                    value='solo'
                    onChange={(e) =>
                      setBilling({
                        ...billing,
                        shippingOpt: e.target.value,
                      })
                    }
                    checked={billing.shippingOpt === 'solo'}
                  />
                </label>
                Flat rate
              </li>
              <li className='flex'>
                <label htmlFor='shippingOpt'>
                  <input
                    className='mr-2'
                    type='radio'
                    name='shippingOpt'
                    id='shippingOpt'
                    value='free-ship'
                    onChange={(e) =>
                      setBilling({
                        ...billing,
                        shippingOpt: e.target.value,
                      })
                    }
                    checked={billing.shippingOpt === 'free-ship'}
                  />
                  Free shipping
                </label>
              </li>
              <li className='flex'>
                <label htmlFor='shippingOpt'>
                  <input
                    className='mr-2'
                    type='radio'
                    name='shippingOpt'
                    id='shippingOpt'
                    value='local'
                    onChange={(e) =>
                      setBilling({
                        ...billing,
                        shippingOpt: e.target.value,
                      })
                    }
                    checked={billing.shippingOpt === 'local'}
                  />
                  Local pickup
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex justify-between'>
          <h4 className='text-subheader-uc basis-2/3'>Payment Method</h4>
          <div className='basis-1/3'>
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
          </div>
        </div>
        <div className='flex justify-between'>
          <h4 className='text-subheader-uc'>Total</h4>
          <p className='basis-1/3'>${cartSubTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
