import { Products } from '../types'

const Carousel = ({products}: Products) => {
  return (
    <div className="flex flex-col items-center w-100">
      {/* Carou */}
      <ul className='flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-6 before:w-[30vw] before:shrink-0 after:w-[30vw] after:shrink-0'>
      {
        products.map(product => {
          return(
            
              <li key={product.id} className='shrink-0 w-80 my-auto items-center'>
                <img className=' max-h-[40vh] object-contain object-center' src={product.image} />
              </li>
          )
        })
      }
      </ul> 
      {/* <ul className='flex'>
        <li>
          <img src={products.image} />
        </li>
      </ul> */}
    </div>
  )
}

export default Carousel