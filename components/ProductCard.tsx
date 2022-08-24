import { FC } from 'react'
import Link from "next/link"
import Image from 'next/image'
import { Product } from '../types'
import style from  '../styles/Product.module.css'

const ProductCard:FC<{product: Product}> = ({product}) => {
  console.log('product', product)
  return (
    <Link className={style.product_card_container} href={"/product/[id]"} as={`/product/${product.id}`}>
      {/* <div className={style.product_card_container}> */}
        <Image src={product.image} alt={product.title} width='100px' height='100px' />
        <h3 className='text-lg font-semibold py-2'>{product.title}</h3>
        <p>{product.description}</p>
      {/* </div> */}
    </Link>
  )
}

export default ProductCard