import e from 'cors';
import { useState, useEffect } from 'react'
import FillBtn from '../components/FillBtn';
import { CartItem } from '../types';
import Router from 'next/router'

const checkout = () => {
  const [ items, setItems ] = useState<CartItem[]>([])
  const [cartSubTotal, setCartSubTotal] = useState(0)
  const [ redirect, setRedirect] = useState("")
  const [ billing, setBilling ] = useState(
    {
      fullName: '',
      country: '',
      street: '',
      city: '',
      zcode: '',
      phone: '',
      email: '',
      shippingOpt: 'solo',
    }
  )
  const [errorInput, setErrorInput] = useState(
    {
      fullName: false,
      country: false,
      street: false,
      city: false,
      zcode: false,
      phone: false,
      email: false,
    }
  )

  useEffect(() => {
    const cartItems = localStorage.getItem('cart');
    if(cartItems) {
      let parsedCart = JSON.parse(cartItems);
      setItems(parsedCart)
      cartFinalSubTotal(parsedCart)
    }
  }, []) 

  const cartFinalSubTotal = (totalArr:CartItem[]) => {
    let totalArrSum = 0;
    for(let value of totalArr) {
      totalArrSum = parseFloat((totalArrSum + value.subTotal).toFixed(2))
    }
    setCartSubTotal(totalArrSum)
  }

  const updateField = (e:any) => {
    setBilling({
      ...billing,
      [e.target.name]: e.target.value
    });
  };


  // TODO detect if error in input then apply error className
  const handleSubmit = (e:any) => {
    e.preventDefault()
    const filtered = Object.entries(billing).filter(([key, value]) => value === '');
    if(filtered.length === 0) {
      Router.push('/')
    }
    // setErrorInput()
    console.log('Order succesfully submitted')
    console.log('filter', filtered)
  }


  const errorClass = "!border-red-500"

  return (
    <div>
      <div className='x-spacing'>
        <p className='w-full'>Home / Checkout</p>
        <form className='max-w-[80rem] mx-auto' onSubmit={handleSubmit}>
          <div className='text-center'>
            <h2 className='title py-12'>Checkout</h2>
          </div>
          <div className='mx-auto flex sm:flex-row flex-col w-full gap-4'>
            <div className='w-full'>
              <h2 className='text-header pb-4'>Billing Details</h2>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="form-input-container">
                  <label className="block tracking-wide text-gray-700 text-subheader-uc mb-1" htmlFor="fullName">Full Name</label>
                  <input className={`form-input ${errorInput ? errorClass : ''}`} name="fullName" type="text"
                    id="fullName" value={billing.fullName} onChange={updateField} required autoComplete="off" />
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    Full name is required
                  </span>
                </div>
                <div className="form-input-container">
                  <label className="block tracking-wide text-gray-700 text-subheader-uc mb-1" htmlFor="country">Country</label>
                  <input className="form-input " name="country" type="text"
                    id="country" value={billing.country} onChange={updateField} required autoComplete="off" />
                </div>
                <div className="form-input-container">
                  <label className="block tracking-wide text-gray-700 text-subheader-uc mb-1" htmlFor="country">Street</label>
                  <input className="form-input" name="street" type="text"
                    id="street" value={billing.street} onChange={updateField} required autoComplete="off" />
                </div>
                <div className="form-input-container">
                  <label className="block tracking-wide text-gray-700 text-subheader-uc mb-1" htmlFor="country">City</label>
                  <input className="form-input" name="city" type="text"
                    id="city" value={billing.city} onChange={updateField} required autoComplete="off" />
                </div>
                <div className="form-input-container">
                  <label className="block tracking-wide text-gray-700 text-subheader-uc mb-1" htmlFor="country">Zip Code</label>
                  <input className="form-input" name="zcode" type="text"
                    id="zcode" value={billing.zcode} onChange={updateField} required autoComplete="off" />
                </div>
                <div className="form-input-container">
                  <label className="block tracking-wide text-gray-700 text-subheader-uc mb-1" htmlFor="country">Phone</label>
                  <input className="form-input" name="phone" type="text"
                    id="phone" value={billing.phone} onChange={updateField} required autoComplete="off" />
                </div>
                <div className="form-input-container">
                  <label className="block tracking-wide text-gray-700 text-subheader-uc mb-1" htmlFor="country">Email Address</label>
                  <input className="form-input" name="email" type="email"
                    id="email" value={billing.email} onChange={updateField} required autoComplete="off" />
                </div>

              </div>
            </div>
            <div className='w-full'>
              <h2 className='text-header pb-4'>Your Order</h2>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                  <h4 className="text-subheader-uc">Product</h4>
                  <h4 className='text-subheader-uc basis-1/3'>Subtotal</h4>
                </div>
                <div>
                  <ul>
                    { items && items.map(item => {
                      return (
                        <ProductItem key={item.id} item={item} />
                      )
                    })}
                    {/* <li className='flex justify-between'>
                      <p className="basis-2/3">Sauder Boulevard Cafe Lounge Chair, Camel finish  × 1</p>
                      <p className='basis-1/3'>$168.99</p>
                    </li>
                    <li className='flex justify-between'>
                      <p className="basis-2/3">Sauder Boulevard Cafe Lounge Chair, Camel finish  × 1</p>
                      <p className='basis-1/3'>$168.99</p>
                    </li> */}
                  </ul>
                </div>
                <div className='flex justify-between'>
                  <h4 className="text-subheader-uc">Subtotal</h4>
                  <p className='basis-1/3'>${cartSubTotal}</p>
                </div>
                <div className='flex justify-between items-center'>
                  <h4 className="text-subheader-uc basis-2/3">Shipping</h4>
                  <div className='basis-1/3'>
                    <ul>
                      <li className='flex'>
                        <label htmlFor="shippingOpt" >
                          <input className='mr-2' type="radio" name="shippingOpt" id="shippingOpt" 
                          value="solo" onChange={(e)=>setBilling({...billing, shippingOpt: e.target.value})} checked={billing.shippingOpt === "solo"} />
                        </label>
                        Flat rate
                      </li>
                      <li className='flex'>
                        <label htmlFor="shippingOpt" >
                          <input className='mr-2' type="radio" name="shippingOpt" id="shippingOpt" 
                          value="free-ship" onChange={(e)=>setBilling({...billing, shippingOpt: e.target.value})} checked={billing.shippingOpt === "free-ship"} />
                          Free shipping
                        </label>
                      </li>
                      <li className='flex'>
                        <label htmlFor="shippingOpt" >
                          <input className='mr-2' type="radio" name="shippingOpt" id="shippingOpt" 
                          value="local" onChange={(e)=>setBilling({...billing, shippingOpt: e.target.value})} checked={billing.shippingOpt === "local"} />
                          Local pickup
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <h4 className="text-subheader-uc">Total</h4>
                  <p className='basis-1/3'>${cartSubTotal}</p>
                </div>
              </div>
            </div>
          </div>
          <div onClick={handleSubmit}>
            <FillBtn text="Place order" url="" />
          </div>
        </form>
      </div>
      <div className="border-b-2 pt-32"></div>
    </div>
  )
}

const ProductItem = ({item}:any) => {
  return (
    <li className='flex justify-between'>
      <p className="basis-2/3 pr-2">×{item.quantity} {item.title}</p>
      <p className='basis-1/3'>${item.subTotal}</p>
    </li>
  )
}

export default checkout