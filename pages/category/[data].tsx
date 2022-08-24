import React from 'react'
import { useRouter } from 'next/router'

const category = () => {
  const router = useRouter();
  const { data } = router.query;
  console.log('data', router)

  // const res = await fetch(`https://fakestoreapi.com/products/category/${data}`)
  // // const products = JSON.stringify(res)
  // console.log('slug', res)
  return (
    <section id="featured" className='py-20 x-spacing'>
      <div className="py-8">
        <h3 className="uppercase text-base pb-2 ">FEATURED</h3>
        <h2 className="uppercase text-4xl">DISCOVER PRODUCTS</h2>
      </div>
      <div>
        {/* <h1>{data}</h1> */}
        {/* <ul className="flex w-full flex-wrap gap-4 justify-between">
          { products.slice(0,6).map(product => {
            return(
              <ProductCard id={product.id} title={product.title} image={product.image} price={product.price}  />
            )
          })}
        </ul> */}
      </div>
    </section>
  )
}

// export const getStaticProps = async(context:any) => {
//   // const router = useRouter();
//   // const { data } = router.query;
//   // console.log('slug', data)
//   console.log('context', context)
//   // console.log('context', context)
//   if(data) {
//     console.log('hahaasdasdas')
//     const res = await fetch(`https://fakestoreapi.com/products/category/${data}`)
//     const products = await res.json()
//     return {
//       props: {
//         products,
//       }
//     }
//   }
// } 

// export const getStaticPaths = async() => {
//   const res = await fetch(`https://fakestoreapi.com/products/`)
//   const products = await res.json()

//   const ids = products.map((product: Product) => product.id)
//   const paths = ids.map((id: number) => ({ params: { id: id.toString() }})) 
//   return {
//     paths,
//     fallback: false,
//   }
// }

export default category