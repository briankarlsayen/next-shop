import { useState, useEffect, useCallback } from 'react'
import { CartItem } from '../types';

const StoreItem = ({item, items, setItems, totalArr, setTotalArr, updateCart, cartFinalSubTotal}:any) => {
  const [itemCount, setItemCount] = useState(item.quantity)
  const [itemPrice, setItemPrice] = useState(item.price * item.quantity)
  console.log('item', item)
  const handleUpdateCount = (e:any) => {
    if(e.target.id === "minus") {
      if(itemCount > 1) {
        let newCount = itemCount - 1

        setItemCount(newCount)
        setItemPrice((newCount) * item.price)

        const params = {
          ...item,
          subTotal: (newCount) * item.price,
          quantity: newCount,
        }
        const newCartArr = items
        const itemIndex = newCartArr.findIndex((data: CartItem) => data.id === item.id )
        newCartArr[itemIndex] = params

        cartFinalSubTotal(newCartArr)
        updateCart(newCartArr)
      }
    } else {
      if(itemCount < 99) {
        let newCount = itemCount + 1
        setItemCount(newCount)
        setItemPrice((newCount) * item.price)

        const params = {
          ...item,
          subTotal: (newCount) * item.price,
          quantity: newCount,
        }
        const newCartArr = items
        const itemIndex = newCartArr.findIndex((data: CartItem) => data.id === item.id )
        newCartArr[itemIndex] = params

        cartFinalSubTotal(newCartArr)
        updateCart(newCartArr)
      }
    }
  }

  const handleDeleteItem = () => {
    const newCartArr = items;
    const itemIndex = newCartArr.findIndex((data: CartItem) => data.id === item.id )
    newCartArr.splice(itemIndex, 1);
    updateCart(newCartArr)
    setItems(newCartArr)
  }

  return (
    <div key={item.id} className='flex justify-between items-center gap-4'>
      <div className='flex basis-6 md:basis-1/6 items-center justify-around'>
        <span className='text-xl cursor-pointer hover:text-red-600' onClick={()=>handleDeleteItem()}>x</span>
        <div className='md:block hidden w-14 h-14'>
          <img className='h-full w-full object-contain' src={item.image} />
        </div>
        {/* <div className='md:block hidden w-8 h-8 border-2'></div> */}
      </div>
      <p className='basis-2/6'>{item.title}</p>
      <p className='basis-1/6'>${item.price}</p>
      <div className='basis-1/6'>
        <div className='item-quantity-btn'>
          <span id="minus" className='text-3xl cursor-pointer' onClick={(e)=>handleUpdateCount(e)}>&#45;</span>
          <p className='text-xl'>{itemCount}</p>
          <span id="add" className='text-3xl cursor-pointer'  onClick={(e)=>handleUpdateCount(e)}>&#43;</span>
        </div>
      </div>
      <p className='basis-1/6'>${itemPrice}</p>
    </div>
  )
}

export default StoreItem