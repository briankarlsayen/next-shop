import { useState, useEffect } from 'react'
import Related from '../../../components/Related'
import { Product } from '../../../types'
import { useRouter } from 'next/router'

type ProductProps = {
  product: Product,
  products: Product[],
}

const product = ({product, products}:ProductProps) => {
  const [itemCount, setItemCount] = useState(1)
  const [itemPrice, setItemPrice] = useState(product.price)
  const [itemDuplicate, setItemDuplicate] = useState(false)
  const handleUpdateCount = (e:any) => {
    console.log('e', e.target.id)
    if(e.target.id === "minus") {
      if(itemCount > 1) {
        setItemCount(itemCount - 1)
        setItemPrice((itemCount - 1) * product.price)
      }
    } else {
      if(itemCount < 99) {
        setItemCount(itemCount + 1)
        setItemPrice((itemCount + 1) * product.price)
      }
    }
  }
  useEffect(() => {
    const cartItems = localStorage.getItem('cart')
    if(cartItems) {
      let parsedCart = JSON.parse(cartItems);
      const duplicateItem = parsedCart.filter((cart:any) => cart.id === product.id)
      if(duplicateItem.length) {
        setItemDuplicate(true)
      }
    }
  }, [])

  const handleAddCart = () => {
    const cartItems = localStorage.getItem('cart')
    if(cartItems) {
      let parsedCart = JSON.parse(cartItems);
      const duplicateItem = parsedCart.filter((cart:any) => cart.id === product.id)
      if(!duplicateItem.length) {
        const withItemCount = {...product, quantity: itemCount, subTotal: itemPrice}
        const updateCart = [...parsedCart, withItemCount]
        localStorage.setItem('cart', JSON.stringify(updateCart));
        setItemDuplicate(true)
      }
    } else {
      const createCart = [{...product, quantity: itemCount, subTotal: itemPrice}]
      localStorage.setItem('cart', JSON.stringify(createCart));
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-between max-w-[80rem] m-auto gap-4 pt-20 md:flex-row flex-col items-center h-[calc(100vh-5rem)]">
        <div className="h-[30rem] w-[30rem] items-center flex flex-col border-2" key={product.id} >
          <img className='h-full w-full object-contain object-center p-4 flex-1' src={product.image} />
        </div>
        <div className="flex flex-col w-full p-4 justify-between min-h-[25rem]">
          <div>
            <div className='pb-4'>
              <p className="text-3xl">{product.title}</p>
              <p className="text-xl py-2">${itemPrice.toFixed(2)}</p>
              <p className="pt-4">{product.description}</p>
            </div>
            <div>
              <div className='flex'>
                <div className='border-2 px-4 py-2 mr-2 flex items-center w-full max-w-[8rem] justify-between'>
                  <span id="minus" className='text-3xl cursor-pointer' onClick={(e)=>handleUpdateCount(e)}>&#45;</span>
                  <p className='text-xl'>{itemCount}</p>
                  <span id="add" className='text-3xl cursor-pointer'  onClick={(e)=>handleUpdateCount(e)}>&#43;</span>
                </div>
                { !itemDuplicate ? 
                  <button className="font-semibold uppercase cursor-pointer border-2 border-black bg-black text-white px-4 py-2" onClick={handleAddCart}>Add to Cart</button> :
                  <button className="font-semibold uppercase cursor-pointer border-2  bg-gray-300 text-black px-4 py-2" onClick={handleAddCart}>View Cart</button> 
                }
              </div>
              <p className='uppercase pt-4'>Add to wishlist</p>
              <p className='border-2 p-2 my-2 w-max'>{product.category}</p>
            </div>
          </div>
          <div>
            <p>{product.rating.rate} Stars</p>
            <p>{product.rating.count} Reviews</p>
          </div>
        </div>
      </div>
      <Related products={products} />
      <div className='border-b pt-40'></div>
    </div>
  )
}

export const getStaticProps = async(context:any) => {
  const res1 = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
  const product = await res1.json()

  const res2 = await fetch(`https://fakestoreapi.com/products/category/${product.category}`)
  const products = await res2.json()

  return {
    props: {
      product,
      products,
    }
  }
} 

export const getStaticPaths = async() => {
  const res = await fetch(`https://fakestoreapi.com/products/`)
  const products = await res.json()

  const ids = products.map((product: Product) => product.id)
  const paths = ids.map((id: number) => ({ params: { id: id.toString() }})) 
  return {
    paths,
    fallback: false,
  }
}

export default product