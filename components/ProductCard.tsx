import { FC } from 'react'
import Link from "next/link"
import Image from 'next/image'
import { Product } from '../types'
import style from  '../styles/Product.module.css'

const ProductCard = (props:any) => {
  return (
    <li className="xl:w-[calc(33.33%-1rem)] md:w-[calc(50%-1rem)] w-full items-center flex flex-col border-2" key={props.id} >
      <Link href={"/product/[id]"} as={`/product/${props.id}`}>
        <img className='max-h-[40vh] w-full object-contain object-center p-4 flex-1 hover:border-black border-2 cursor-pointer' src={props.image} />
      </Link>
      <div className="w-full border-t-2 p-4">
        <div className="w-full flex justify-between">
          <p>{props.title}</p>
          <p className="font-semibold">${props.price}</p>
        </div>
        <p className="font-semibold uppercase cursor-pointer">Add to Cart</p>
      </div>
    </li>
  )
}

export default ProductCard