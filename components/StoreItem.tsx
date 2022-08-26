import { useState, useEffect, useCallback } from 'react'
import { CartItem } from '../types';

const StoreItem = ({item, items, setItems, totalArr, setTotalArr, updateCart, cartFinalSubTotal}:any) => {
  const [itemCount, setItemCount] = useState(item.quantity)
  const [itemPrice, setItemPrice] = useState(item.price * item.quantity)
  const handleUpdateCount = (e:any) => {
    console.log('e', e.target.id)
    if(e.target.id === "minus") {
      if(itemCount > 1) {
        let newCount = itemCount - 1

        setItemCount(newCount)
        setItemPrice((newCount) * item.price)

        console.log('item', item)

        const params = {
          ...item,
          subTotal: (newCount) * item.price,
          quantity: newCount,
        }
        console.log('params', params)
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
    console.log('newCartArr', newCartArr)
    updateCart(newCartArr)
    setItems(newCartArr)
  }

  return (
    <div key={item.id} className='flex justify-between p-4 items-center'>
      <div className='flex basis-1/6 items-center justify-around'>
        <span className='text-3xl cursor-pointer hover:text-red-600' onClick={()=>handleDeleteItem()}>x</span>
        <div className='md:block hidden w-8 h-8 border-2'></div>
      </div>
      <p className='basis-2/6'>{item.title}</p>
      <p className='basis-1/6'>${item.price}</p>
      <div className='basis-1/6'>
        <div className='border-2 px-4 py-2 mr-2 flex items-center w-full max-w-[8rem] justify-between'>
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