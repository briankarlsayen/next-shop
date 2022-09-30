import { useState } from 'react'
import { useRouter}  from 'next/router'
import { Products, Product } from '../types';
import ProductCard from '../components/ProductCard';
import type { GetStaticProps, NextPage } from 'next'
import Link from "next/link"

const ShopType: NextPage<{products: Product[], categories: any}> = ({products, categories}) => {
  const router = useRouter();
  const {type} = router.query;
  return <ShopCategory categories={categories} type={type} />
}

const ShopCategory = ({categories, type}:any) => {
  return(
    <div className='flex items-center gap-2 pb-4 overflow-x-auto category-btn-container'>
      { categories.map((category: any, id: number)=> {
        return(
          <Link key={id} href={"/shop/[type]"} as={`/shop/${category}`}>
            <h4 className={`px-4 py-2 border rounded-sm cursor-pointer whitespace-nowrap ${category === type ? 'bg-custom-yellow text-white': 'bg-white text-black hover:bg-[#e5e5e5]'}`}>{category}</h4>
          </Link>
        )
      })}
    </div>
  )
}

export default ShopType