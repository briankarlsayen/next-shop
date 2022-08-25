import React from 'react'
import { useRouter}  from 'next/router'
import { Products, Product } from '../../types';
import ProductCard from '../../components/ProductCard';

const category = ({products}: Products) => {
  const router = useRouter();
  console.log('router', router)
  const {type} = router.query;
  return (
    <section id="featured" className='py-20 x-spacing'>
      <div className="py-8">
        <h3 className="uppercase text-base pb-2 ">Category</h3>
        <h2 className="uppercase text-4xl">{type}</h2>
      </div>
      <div>
        <ul className="flex w-full flex-wrap gap-4 justify-between">
          { products.slice(0,6).map(product => {
            return(
              <ProductCard key={product.id} id={product.id} title={product.title} image={product.image} price={product.price}  />
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export const getStaticProps = async(context:any) => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${context.params.type}`);
  const products = await res.json()

  return {
    props: {
      products,
    }
  }
} 

export const getStaticPaths = async() => {
  const res = await fetch(`https://fakestoreapi.com/products/`)
  const products = await res.json()

  const categories = products.map((product: Product) => product.category)
  const paths = categories.map((category: string) => ({ params: { type: category.toString() }})) 
  return {
    paths,
    fallback: false,
  }
}

export default category