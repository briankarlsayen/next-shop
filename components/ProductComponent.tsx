import { useState } from 'react';
import { Product } from '../types';
import Link from 'next/link';
import { cartStore } from '../store/CartStore';
import { updateCartApi } from '../utils/db';

type ProductProps = {
  product: Product;
  products: Product[];
};

const Product = ({ product, products }: ProductProps) => {
  const { updateCart, cart } = cartStore((state) => state);
  const [itemCount, setItemCount] = useState(1);
  const [itemPrice, setItemPrice] = useState(product.price);
  const [itemDuplicate, setItemDuplicate] = useState(
    cart.filter((cart: any) => cart.id === product.id).length > 0
  );
  const [favorite, setFavorite] = useState(false);

  const handleUpdateCount = (e: any) => {
    if (e.target.id === 'minus') {
      if (itemCount > 1) {
        setItemCount(itemCount - 1);
        setItemPrice((itemCount - 1) * product.price);
      }
    } else {
      if (itemCount < 99) {
        setItemCount(itemCount + 1);
        setItemPrice((itemCount + 1) * product.price);
      }
    }
  };

  const handleAddCart = () => {
    if (cart) {
      const duplicateItem = cart.filter((cart: any) => cart.id === product.id);
      if (!duplicateItem.length) {
        const withItemCount = {
          ...product,
          quantity: itemCount,
          subTotal: itemPrice,
        };
        const updatedCart = [...cart, withItemCount];
        updateCartApi(updatedCart);
        setItemDuplicate(true);
        updateCart(updatedCart);
      }
    } else {
      const createCart = [
        { ...product, quantity: itemCount, subTotal: itemPrice },
      ];
      updateCartApi(createCart);
      updateCart(createCart);
    }
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <div className='flex justify-between max-w-[80rem] mx-auto gap-4 flex-col bg-white rounded-sm mb-20'>
        <div className='flex bg-white h-full items-center lg:flex-row flex-col lg:min-h-[calc(73vh)]'>
          <div
            className='basis-3/4 h-full w-full items-center flex flex-col bg-white rounded-sm p-4 '
            key={product.id}
          >
            <img
              className='md:max-h-[30rem] md:max-w-[30rem] max-w-[20rem] w-full object-contain object-center md:flex-1 h-[20rem]'
              src={product.image}
            />
          </div>
          <div className='basis-1/4 flex flex-col w-full p-4 justify-between h-full bg-[#DDC6A4] lg:min-h-[calc(73vh)]'>
            <div>
              <p className='bg-[#4D4437] px-2 py-1 my-2 w-max text-white rounded-sm'>
                {product.category}
              </p>
              <div className='pb-4'>
                <p className='text-3xl'>{product.title}</p>
                <p className='text-xl py-2'>${itemPrice.toFixed(2)}</p>
                <p className='pt-4'>{product.description}</p>
              </div>
              <div>
                <div className='flex flex-col gap-2'>
                  <div className='py-2 flex w-full max-w-[6rem] justify-between'>
                    <span
                      id='minus'
                      className='text-xl  cursor-pointer flex-1 flex justify-center hover:bg-[#342e26] bg-[#4D4437] text-white duration-100 ease-linear rounded-sm'
                      onClick={(e) => handleUpdateCount(e)}
                    >
                      &#45;
                    </span>
                    <p className='text-xl px-2'>{itemCount}</p>
                    <span
                      id='add'
                      className='text-xl cursor-pointer flex-1 flex justify-center hover:bg-[#342e26] bg-[#4D4437] text-white duration-100 ease-linear rounded-sm'
                      onClick={(e) => handleUpdateCount(e)}
                    >
                      &#43;
                    </span>
                  </div>
                  <div className='flex w-full gap-x-2'>
                    {!itemDuplicate ? (
                      <button
                        className='cursor-pointer text-white px-4 py-2 hero-btn !w-full rounded-sm'
                        onClick={handleAddCart}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <button
                        className='w-full font-semibold uppercase cursor-pointer  bg-gray-300 text-black px-4 py-2 rounded-sm'
                        onClick={handleAddCart}
                      >
                        <Link href='/cart'>View Cart</Link>
                      </button>
                    )}
                    <button
                      className='w-12 items-center p-1 hover:bg-[#b29146] bg-[#CBA95D] rounded-sm'
                      onClick={handleFavorite}
                    >
                      <img
                        className='object-contain '
                        src={favorite ? '/heart-filled.svg' : '/heart.svg'}
                        alt='heart'
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className='pt-4'>
                <div className='flex items-center'>
                  <p>{product.rating.rate}</p>
                  <img className='w-6' src='/star.svg' alt='stars' />
                </div>
                {/* <p>{product.rating.rate} Stars</p> */}
                <p>{product.rating.count} Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
