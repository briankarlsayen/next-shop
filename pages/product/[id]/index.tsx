import React from 'react'
import { Product } from '../../../types'

const product = ({product}:any) => {
  return (
    <div className="flex w-full">
      <div className="flex justify-between max-w-[80rem] m-auto gap-4 pt-20 md:flex-row flex-col items-center">
        <div className="h-[30rem] w-[30rem] items-center flex flex-col border-2" key={product.id} >
          <img className='h-full w-full object-contain object-center p-4 flex-1' src={product.image} />
        </div>
        <div className="flex flex-col w-full p-4 justify-between min-h-[25rem]">
          <div>
            <div className='pb-4'>
              <p className="text-3xl">{product.title}</p>
              <p className="text-xl py-2">${product.price}</p>
              <p className="pt-4">{product.description}</p>
            </div>
            <div>
              <button className='border-2 px-4 py-2 mr-2'>1</button>
              <button className="font-semibold uppercase cursor-pointer border-2 border-black bg-black text-white px-4 py-2">Add to Cart</button>
              <p className='uppercase pt-4'>Add to wishlist</p>
            </div>
          </div>
          <div>
            <p>{product.rating.rate} Stars</p>
            <p>{product.rating.count} Reviews</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async(context:any) => {
  const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
  const product = await res.json()
  return {
    props: {
      product
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