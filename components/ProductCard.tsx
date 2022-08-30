import Link from "next/link"

const ProductCard = (props:any) => {
  const handleAddCart = () => {
    const cartItems = localStorage.getItem('cart')
    if(cartItems) {
      let parsedCart = JSON.parse(cartItems);
      const duplicateItem = parsedCart.filter((cart:any) => cart.id === props.id)
      if(duplicateItem.length) {
        console.log('item already in cart')
      } else {
        const withItemCount = {...props, quantity: 1, subTotal: props.price}
        const updateCart = [...parsedCart, withItemCount]
        localStorage.setItem('cart', JSON.stringify(updateCart));
      }
    } else {
      console.log('item added to cart')
      const createCart = [{...props, quantity: 1, subTotal: props.price}]
      localStorage.setItem('cart', JSON.stringify(createCart));
    }
  }

  return (
    <li className="xl:w-[calc(33.33%-1rem)] md:w-[calc(50%-1rem)] w-full items-center flex flex-col border-2" key={props.id} >
      <Link href={"/product/[id]"} as={`/product/${props.id}`}>
        <div className="h-[40vh] w-full hover:border-black border">
          <img className='h-full object-center p-4 flex-1 cursor-pointer mx-auto' src={props.image} />
        </div>
      </Link>
      <div className="w-full border-t-2 p-4">
        <div className="w-full flex justify-between">
          <p>{props.title}</p>
          <p className="font-semibold">${props.price}</p>
        </div>
        <p className="font-semibold uppercase cursor-pointer" onClick={handleAddCart}>Add to Cart</p>
      </div>
    </li>
  )
}

export default ProductCard