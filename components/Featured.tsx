import { Products } from '../types';
import Link from "next/link"
import ProductCard from './ProductCard';

export const Featured = ({products}: Products) => {
  return (
    <section id="featured" className='py-20 x-spacing'>
      <div className="py-8">
        <h3 className="uppercase text-base pb-2 ">FEATURED</h3>
        <h2 className="uppercase text-4xl">DISCOVER PRODUCTS</h2>
      </div>
      <div>
        <ul className="flex w-full flex-wrap gap-4 justify-between">
          { products.slice(0,6).map(product => {
            return(
              <ProductCard id={product.id} title={product.title} image={product.image} price={product.price}  />
            )
          })}
        </ul>
      </div>
    </section>
  )
}
