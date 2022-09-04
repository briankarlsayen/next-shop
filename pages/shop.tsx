import type { GetStaticProps, NextPage } from 'next'
import { Product } from '../types'
import ProductCard from '../components/ProductCard'

const shop: NextPage<{products: Product[]}> = ({products}) => {
  console.log('products', products)
  return (
    <div>
      <div className='x-spacing max-w-[80rem] mx-auto pb-20'>
        <h2 className='title text-center py-12'>Shop</h2>
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

const ShopItem = () => {
  return(
    <div className='border w-full h-full'>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async(context) => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const products = await res.json()

  return {
    props: {
      products,
    }
  }
}

export default shop