import Link from "next/link"

export const Categories = ({categories}: any) => {
  console.log('categories', categories)
  const categoryImg = [
    {
      id: 0,
      img: 'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80'
    },
  ]


  return (
    <section id='categories'className='py-48'>
      <div className='x-spacing'>
        <h3 className='text-subtitle pb-2'>Search By</h3>
        <h2 className='text-title'>Categories</h2>
        <div className='flex lg:flex-row flex-col w-full justify-between gap-4 py-6'>
          { categories.map((category: string, id: number) => {
            return(
              <Link key={id} href={"/category/[id]"} as={`/category/${category}`}>
                <div className='flex-1 justify-between cursor-pointer relative gap-2'>
                  
                  <h2 className='absolute z-10 uppercase text-xl px-2 py-2 text-white'>{category}</h2>
                  <div className='w-full md:h-[30rem] h-[10rem] hover:brightness-90 ] overflow-hidden duration-75 ease-in'>
                    <img className='h-full w-full object-cover object-center hover:scale-105' src={categoryImg[id].img} />
                  </div>
                  {/* <img className='h-full w-full object-cover object-center max-h-[40vh]' src={categoryImg[id].img} /> */}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
