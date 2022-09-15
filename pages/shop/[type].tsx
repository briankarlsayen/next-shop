import { useState } from 'react'
import { useRouter}  from 'next/router'
import { Products, Product } from '../../types';
import ProductCard from '../../components/ProductCard';
import type { GetStaticProps, NextPage } from 'next'
import Link from "next/link"

const category: NextPage<{products: Product[], categories: any}> = ({products, categories}) => {
  const router = useRouter();
  const {type} = router.query;
  return (
    <div>
      <div className='x-spacing max-w-[80rem] mx-auto py-20'>
        <ShopCategory categories={categories} type={type} />
        <div className='w-full flex flex-row gap-4'>
          <ul className="flex w-full flex-wrap gap-4">
            { products.map(product => {
              return(
                <ProductCard key={product.id} id={product.id} title={product.title} image={product.image} price={product.price}  />
              )
            })}
          </ul>
        </div>
      </div>
      <div className='border-t-2'></div>
    </div>
  )
}

const ShopCategory = ({categories, type}:any) => {
  return(
    <div className='flex items-center gap-2 pb-4'>
      { categories.map((category: any, id: number)=> {
        return(
          <Link key={id} href={"/shop/[type]"} as={`/shop/${category}`}>
            <h4 className={`px-4 py-2 border rounded-sm cursor-pointer ${category === type ? 'bg-custom-yellow text-white': 'bg-white text-black hover:bg-[#e5e5e5]'}`}>{category}</h4>
          </Link>
        )
      })}
    </div>
  )
}

export const getStaticProps = async(context:any) => {
  try {
    let res;
    if(context.params.type === "all") {
      res = await fetch(`https://fakestoreapi.com/products/`)
    } else {
      res = await fetch(`https://fakestoreapi.com/products/category/${context.params.type}`);
    }
    const products = await res.json()
  
    const getCategories = await fetch("https://fakestoreapi.com/products/categories")
    const categories = await getCategories.json()
    categories.unshift('all')
  
    return {
      props: {
        products,
        categories,
      }
    }
  } catch(error) {
    console.log('error', error)
    return { notFound: true };
  }
} 

export const getStaticPaths = async() => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/`)
    const products = await res.json()
  
    const categories = products.map((product: Product) => product.category)
    categories.push("all")
    const paths = categories.map((category: string) => ({ params: { type: category.toString() }})) 
    return {
      paths,
      fallback: false,
    }
  } catch(error) {
    console.log('error', error)
    return { fallback: 'blocking', paths: [] };
  }
}

export default category