import Link from "next/link"

export const Categories = ({categories}: any) => {
  return (
    <section id='categories'className='py-20 border-b-2'>
      <div className='x-spacing'>
        <h3 className='uppercase text-base pb-2'>Search By</h3>
        <h2 className='uppercase text-4xl'>Categories</h2>
        <div className='flex lg:flex-row flex-col w-full justify-between gap-4 py-6'>
          { categories.map((category: string, id: number) => {
            console.log('category', category)
            return(
              <Link href="/category/jewelry" >
              {/* <Link href={"/category/[id]"} as={`/category/${category}`}> */}
              {/* // <Link href={{pathname:"/category", query: { keyword: categories }}}> */}
                <div className='flex-1 p-4 border-2 flex justify-between'>
                  <h2 key={id}>{category}</h2>
                  <span className='pl-2'>&rarr;</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
