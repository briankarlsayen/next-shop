import {useState, useEffect, useCallback} from 'react'
import StoreItem from '../components/StoreItem';
import { CartItem, CartItems, SubTotalPrice } from '../types';
import Link from "next/link"

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
      <div className='max-w-[80rem] m-auto'>
        <div className='justify-center selection:w-full flex flex-col items-center pb-20'>
          <div className='max-w-[80rem] w-full border-2'>
            <div className='flex justify-between border-b-2 py-4'>
              <div className='basis-6 md:basis-1/6'></div>
              <h3 className="basis-2/6 text-subheader">Product</h3>
              <h3 className="basis-1/6 text-subheader">Price</h3>
              <h3 className="basis-1/6 text-subheader">Quantity</h3>
              <h3 className="basis-1/6 text-subheader">Subtotal</h3>
            </div>
            <div className='py-4'>
              {items.map(item => {
                return(
                  <StoreItem key={item.id} item={item} items={items} setItems={setItems} totalArr={totalArr} setTotalArr={setTotalArr} updateCart={updateCart} cartFinalSubTotal={cartFinalSubTotal} />
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-4xl pb-12 font-semibold'>Cart Totals</h2>
          <div className='max-w-[35rem] border-2'>
            <div className='flex justify-between p-4 border-b-2'>
              <h3 className='text-xl'>Subtotal</h3>
              <p className='basis-1/3'>${cartSubTotal}</p>
            </div>
            <div className='flex justify-between p-4 border-b-2'>
              <h3 className='text-xl'>Shipping</h3>
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
              <h3 className='text-xl'>Total</h3>
              <p className='basis-1/3'>${cartSubTotal}</p>
            </div>
          </div>
        </div>
        <button className='bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 text-xl uppercase mt-6'>Proceed to checkout</button>
      </div>
    )
  }

  return (
    <div>
      <div className='x-spacing'>
        <p className='w-full'>Home / Cart</p>
        <div className='text-center'>
          <h2 className='text-4xl py-12 font-semibold'>Shopping Cart</h2>
        </div>
        {items.length ? <ShoppingCartContainer /> : <EmptyCart />}
      </div>
      <div className="border-b-2 pt-32"></div>
    </div>
  )
}

const EmptyCart = () => {
  return(
    <div className='text-center'>
      <h3 className='text-2xl'>Your cart is currently empty</h3>
      <button className='bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 text-xl uppercase mt-6'>
        <Link href="/">
          Return to shop
        </Link>
      </button>
    </div>
  )
}

export default cart