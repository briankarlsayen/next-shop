import {useState, useEffect, useCallback} from 'react'
import StoreItem from '../components/StoreItem';
import { CartItem, CartItems, SubTotalPrice } from '../types';
import Link from "next/link"
import FillBtn from '../components/FillBtn';

const cart = () => {
  const [items, setItems] = useState<CartItem[]>([])
  const [totalArr, setTotalArr] = useState<SubTotalPrice[]>([{
    id: 0,
    subTotal: 0
  }])
  const [cartSubTotal, setCartSubTotal] = useState(0)
  const [callback, setCallback] = useState(false)
  const [shippingOpt, setShippingOpt] = useState('solo')
  
  
  function updateCart (cartArr:any) {
    localStorage.setItem('cart', JSON.stringify(cartArr));
    setCallback(!callback)
  }
  useEffect(() => {
    setItems(items)
  }, [callback])

  useEffect(() => {
    const cartItems = localStorage.getItem('cart');
    if(cartItems) {
      let parsedCart = JSON.parse(cartItems);
      setItems(parsedCart)
      inititalCartTotal(parsedCart)
    }
  }, []) 

  const inititalCartTotal = (parsedCart:any) => {
    const cartSubTotalArr = [];
    for(let value of parsedCart) {
      cartSubTotalArr.push({id: value.id, subTotal: value.subTotal})
    }
    setTotalArr(cartSubTotalArr)
    cartFinalSubTotal(cartSubTotalArr)
  }

  const cartFinalSubTotal = (totalArr:SubTotalPrice[]) => {
    let totalArrSum = 0;
    for(let value of totalArr) {
      totalArrSum = parseFloat((totalArrSum + value.subTotal).toFixed(2))
    }
    setCartSubTotal(totalArrSum)
  }

  const ShoppingCartContainer = () => {
    return(
      <div className='cart max-w-[80rem] m-auto'>
        <div className='justify-center selection:w-full flex flex-col items-center pb-20 '>
          <div className='max-w-[80rem] w-full'>
            <div className='flex justify-between border-b-2 py-4 bg-white'>
              <div className='basis-6 md:basis-1/6'></div>
              <h3 className="basis-2/6 text-subheader-uc">Product</h3>
              <h3 className="basis-1/6 text-subheader-uc">Price</h3>
              <h3 className="basis-1/6 text-subheader-uc">Quantity</h3>
              <h3 className="basis-1/6 text-subheader-uc">Subtotal</h3>
            </div>
            <div className='flex flex-col gap-2 py-4 bg-white'>
              {items.map(item => {
                return(
                  <StoreItem key={item.id} item={item} items={items} setItems={setItems} totalArr={totalArr} setTotalArr={setTotalArr} updateCart={updateCart} cartFinalSubTotal={cartFinalSubTotal} />
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-2xl pb-6'>Cart Totals</h2>
          <div className='max-w-[35rem] bg-white'>
            <div className='flex justify-between p-4 border-b-2 '>
              <h3 className='text-subheader-uc '>Subtotal</h3>
              <p className='basis-1/3'>${cartSubTotal}</p>
            </div>
            <div className='flex justify-between p-4 border-b-2'>
              <h3 className='text-subheader-uc'>Shipping</h3>
              <form className='basis-1/3'>
                <ul>
                  <li className='flex'>
                    <label htmlFor="shippingOpt" >
                      <input className='mr-2' type="radio" name="shippingOpt" id="shippingOpt" 
                      value="solo" onChange={(e)=>setShippingOpt(e.target.value)} checked={shippingOpt === "solo"} />
                    </label>
                    Flat rate
                  </li>
                  <li className='flex'>
                    <label htmlFor="shippingOpt" >
                      <input className='mr-2' type="radio" name="shippingOpt" id="shippingOpt" 
                      value="free-ship" onChange={(e)=>setShippingOpt(e.target.value)} checked={shippingOpt === "free-ship"} />
                      Free shipping
                    </label>
                  </li>
                  <li className='flex'>
                    <label htmlFor="shippingOpt" >
                      <input className='mr-2' type="radio" name="shippingOpt" id="shippingOpt" 
                      value="local" onChange={(e)=>setShippingOpt(e.target.value)} checked={shippingOpt === "local"} />
                      Local pickup
                    </label>
                  </li>
                </ul>
              </form>
            </div>
            <div className='flex justify-between p-4'>
              <h3 className='text-subheader-uc'>Total</h3>
              <p className='basis-1/3'>${cartSubTotal}</p>
            </div>
          </div>
        </div>
        <FillBtn text="Proceed to checkout" url="/checkout" />
      </div>
    )
  }

  return (
    <div>
      <div className='x-spacing py-20'>
        {/* <div className='text-center'>
          <h2 className='text-4xl py-12 font-semibold'>Shopping Cart</h2>
        </div> */}
        {items.length ? <ShoppingCartContainer /> : <EmptyCart />}
      </div>
    </div>
  )
}

const EmptyCart = () => {
  return(
    <div className='text-center'>
      <h3 className='text-2xl'>Your cart is currently empty</h3>
      <FillBtn text="Return to shop" url="/" />
    </div>
  )
}

export default cart