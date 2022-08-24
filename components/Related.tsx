import React from 'react'
import { Products } from '../types'
import ProductCard from './ProductCard'

const Related = ({products}: Products) => {
  return (
    <div className='max-w-[80rem] m-auto'>
      <h2 className='text-3xl uppercase'>Related Products</h2>
      <ul className="flex w-full flex-wrap gap-4 justify-between">
        { products.slice(0,3).map(product => {
          return(
            <ProductCard id={product.id} title={product.title} image={product.image} price={product.price}  />
          )
        })}
      </ul>
    </div>
  )
}

export default Related