import { useState, useEffect } from 'react'
import { CartItem } from '../types';

const StoreItem = ({item, totalArr, setTotalArr}:any) => {
  const [itemCount, setItemCount] = useState(item.quantity)
  const [itemPrice, setItemPrice] = useState(item.price * item.quantity)
  const handleUpdateCount = (e:any) => {
    console.log('e', e.target.id)
    if(e.target.id === "minus") {
      if(itemCount > 1) {
        setItemCount(itemCount - 1)
        setItemPrice((itemCount - 1) * item.price)
        // setTotalArr(totalArr, {
        //   id: item.id,
        //   subTotal: (itemCount - 1) * item.price
        // })
        const params = {
          id: item.id,
          subTotal: (itemCount - 1) * item.price
        }
        setTotalArr([...totalArr, params])
      }
    } else {
      if(itemCount < 99) {
        setItemCount(itemCount + 1)
        setItemPrice((itemCount + 1) * item.price)

        const params = {
          id: item.id,
          subTotal: (itemCount + 1) * item.price
        }
        setTotalArr([...totalArr, params])
        console.log('totalArr', totalArr)
      }
    }
  }

  useEffect(() => {
    const params = {
      id: item.id,
      subTotal: item.subTotal
    }
    console.log('item', item)
    setTotalArr([...totalArr, params])
  }, [])

  return (
    <div key={item.id} className='flex justify-between p-4'>
      <div className='md:flex hidden basis-1/6 items-center  justify-center'>
        <div className='w-8 h-8 border-2'></div>
      </div>
      <p className='basis-2/6'>{item.title}</p>
      <p className='basis-1/6'>${item.price}</p>
      <div className='basis-1/6'>
        <div className='border-2 px-4 py-2 mr-2 flex items-center w-full max-w-[8rem] justify-between'>
          <span id="minus" className='text-3xl cursor-pointer' onClick={(e)=>handleUpdateCount(e)}>&#45;</span>
          <p className='text-xl'>{itemCount}</p>
          <span id="add" className='text-3xl cursor-pointer'  onClick={(e)=>handleUpdateCount(e)}>&#43;</span>
        </div>
        {/* x{item.quantity} */}
      </div>
      <p className='basis-1/6'>${itemPrice}</p>
    </div>
  )
}

export default StoreItem