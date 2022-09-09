import { Products } from '../types';
import Link from "next/link"
import ProductCard from './ProductCard';

export const Featured = ({products}: Products) => {
  return (
    <section id="featured" className='py-48 x-spacing'>
      <div className="pb-8">
        <h3 className="text-subtitle pb-2">Featured</h3>
        <h2 className="text-title">Discover Products</h2>
      </div>
      <div>
        <ul className="flex w-full flex-wrap gap-4 gap-x-6 justify-between">
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
