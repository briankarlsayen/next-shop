import { FC } from 'react'
import Image from 'next/image'
import { Product } from '../types'
import style from  '../styles/Product.module.css'

const ProductCard:FC<{product: Product}> = ({product}) => {
  return (
    <div className={style.product_card_container}>
      <Image src={product.image} alt={product.title} width='100px' height='100px' />
      <h3 className='text-lg font-semibold py-2'>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductCard