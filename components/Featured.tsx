import { Products } from '../types';
import Link from "next/link"

export const Featured = ({products}: Products) => {
  const featuredList = []
  for (let i = 0; i < 6; i++) {
    featuredList.push(
      <Link href={"/product/[id]"} as={`/product/${products[i].id}`}>
        <li className="xl:w-[calc(33.33%-1rem)] md:w-[calc(50%-1rem)] w-full items-center flex flex-col border-2" key={products[i].id} >
          <img className='max-h-[40vh] object-contain object-center p-4 flex-1' src={products[i].image} />
          <div className="w-full border-t-2 p-4">
            <div className="w-full flex justify-between">
              <p>{products[i].title}</p>
              <p className="font-semibold">${products[i].price}</p>
            </div>
            <p className="font-semibold uppercase cursor-pointer">Add to Cart</p>
          </div>
        </li>
      </Link>
      );
    }
  return (
    <section id="featured" className='py-20 x-spacing'>
      <div className="py-8">
        <h3 className="uppercase text-base pb-2 ">FEATURED</h3>
        <h2 className="uppercase text-4xl">DISCOVER PRODUCTS</h2>
      </div>
      <div>
        <ul className="flex w-full flex-wrap gap-4 justify-between">
          { featuredList }
        </ul>
      </div>
    </section>
  )
}
