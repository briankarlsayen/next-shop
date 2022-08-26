import {useState, useEffect} from 'react'
import StoreItem from '../components/StoreItem';
import { CartItem, CartItems } from '../types';

const cart = () => {
  const [items, setItems] = useState<CartItem[]>([])
  const [itemsSubtotal, setItemsSubtotal] = useState(0)
  const [totalArr, setTotalArr] = useState([{
    id: 0,
    subTotal: 0
  }])
  console.log('itemArr', totalArr)

  useEffect(() => {
    const cartItems = localStorage.getItem('cart');
    if(cartItems) {
      let parsedCart = JSON.parse(cartItems);
      setItems(parsedCart)
      setItemsSubtotal(computeSubtotal(parsedCart))
    }
  }, [])

  const computeSubtotal = (cartItems: CartItem[]) => {
    let total = 0;
    for(let value of cartItems) {
      total = total + (value.price * value.quantity)
    }
    return total
  }

  

  return (
    <div className='x-spacing'>
      <p className='w-full'>Home / Cart</p>
      <div className='max-w-[80rem] m-auto'>
        <div className='justify-center selection:w-full flex flex-col items-center pb-20'>
        <h1>{totalArr.map(item=> <p>{item.subTotal}</p>)}</h1>
        <h2 className='text-4xl pb-12 font-semibold'>Shopping Cart</h2>
        <div className='max-w-[80rem] w-full border-2'>
          <div className='flex justify-between border-b-2 p-4'>
            <div className='md:block hidden basis-1/6'></div>
            <h3 className="basis-2/6 text-xl">Product</h3>
            <h3 className="basis-1/6 text-xl">Price</h3>
            <h3 className="basis-1/6 text-xl">Quantity</h3>
            <h3 className="basis-1/6 text-xl">Subtotal</h3>
          </div>
          <div className='py-4'>
            {items.map(item => {
              return(
                <StoreItem key={item.id} item={item} totalArr={totalArr} setTotalArr={setTotalArr} />
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
            <p>${itemsSubtotal}</p>
          </div>
          <div className='flex justify-between p-4 border-b-2'>
            <h3 className='text-xl'>Shipping</h3>
            <form>
              <ul>
                <li className='flex justify-between'>
                  <input type="radio" id="flat" value="flat" defaultChecked />
                  <label className='pl-2' htmlFor='flat'>Flat rate</label>
                </li>
                <li className='flex justify-between'>
                  <input  type="radio" id="free-ship" value="free-ship" />
                  <label className='pl-2' htmlFor='free-ship'>Free shipping</label>
                </li>
                <li className='flex justify-between'>
                  <input type="radio" id="local" value="local" />
                  <label className='pl-2' htmlFor='local'>Local pickup</label>
                </li>
              </ul>
            </form>
          </div>
          <div className='flex justify-between p-4'>
            <h3 className='text-xl'>Total</h3>
            <p>${itemsSubtotal}</p>
          </div>
        </div>
      </div>
      <button className='bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 text-xl uppercase mt-6'>Proceed to checkout</button>
    </div>
      
    </div>
  )
}

export default cart