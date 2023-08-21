import StoreItem from '../components/StoreItem';
import FillBtn from '../components/FillBtn';
import { cartStore } from '../store/CartStore';
import { updateCartApi } from '../utils/db';

const Cart = () => {
  const { updateCart, updateCartTotal, cart, totalArr, cartSubTotal } =
    cartStore((state) => state);

  const handleUpdateCart = (cartArr: any) => {
    updateCartApi(cartArr);
    updateCart(cartArr);
  };

  const cartFinalSubTotal = () => {};

  const ShoppingCartContainer = () => {
    return (
      <div className='cart max-w-[80rem] m-auto'>
        <div className='justify-center selection:w-full flex flex-col items-center pb-20 '>
          <div className='max-w-[80rem] w-full'>
            <div className='flex justify-between border-b-2 py-4 bg-white'>
              <div className='basis-6 md:basis-1/6'></div>
              <h3 className='basis-2/6 text-subheader-uc'>Product</h3>
              <h3 className='basis-1/6 text-subheader-uc'>Price</h3>
              <h3 className='basis-1/6 text-subheader-uc'>Quantity</h3>
              <h3 className='basis-1/6 text-subheader-uc'>Subtotal</h3>
            </div>
            <div className='flex flex-col gap-2 py-4 bg-white'>
              {cart.map((item) => {
                return (
                  <StoreItem
                    key={item.id}
                    item={item}
                    items={cart}
                    setItems={updateCart}
                    totalArr={totalArr}
                    setTotalArr={updateCartTotal}
                    updateCart={handleUpdateCart}
                    cartFinalSubTotal={cartFinalSubTotal}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className='pb-6'>
          <h2 className='text-2xl pb-6'>Cart Totals</h2>
          <div className='max-w-[35rem] bg-white'>
            <div className='flex justify-between p-4 border-b-2 '>
              <h3 className='text-subheader-uc '>Subtotal</h3>
              <p className='basis-1/3'>${cartSubTotal}</p>
            </div>
            {/* <div className='flex justify-between p-4 border-b-2'>
              <h3 className='text-subheader-uc'>Shipping</h3>
              <form className='basis-1/3'>
                <ul>
                  <li className='flex'>
                    <label htmlFor='shippingOpt'>
                      <input
                        className='mr-2'
                        type='radio'
                        name='shippingOpt'
                        id='shippingOpt'
                        value='solo'
                        onChange={(e) => setShippingOpt(e.target.value)}
                        checked={shippingOpt === 'solo'}
                      />
                    </label>
                    Flat rate
                  </li>
                  <li className='flex'>
                    <label htmlFor='shippingOpt'>
                      <input
                        className='mr-2'
                        type='radio'
                        name='shippingOpt'
                        id='shippingOpt'
                        value='free-ship'
                        onChange={(e) => setShippingOpt(e.target.value)}
                        checked={shippingOpt === 'free-ship'}
                      />
                      Free shipping
                    </label>
                  </li>
                  <li className='flex'>
                    <label htmlFor='shippingOpt'>
                      <input
                        className='mr-2'
                        type='radio'
                        name='shippingOpt'
                        id='shippingOpt'
                        value='local'
                        onChange={(e) => setShippingOpt(e.target.value)}
                        checked={shippingOpt === 'local'}
                      />
                      Local pickup
                    </label>
                  </li>
                </ul>
              </form>
            </div> */}
            <div className='flex justify-between p-4'>
              <h3 className='text-subheader-uc'>Total</h3>
              <p className='basis-1/3'>${cartSubTotal}</p>
            </div>
          </div>
        </div>
        <FillBtn text='Proceed to checkout' url='/checkout' className='w-fit' />
      </div>
    );
  };

  return (
    <div>
      <div className='x-spacing py-20'>
        {cart.length ? <ShoppingCartContainer /> : <EmptyCart />}
      </div>
    </div>
  );
};

const EmptyCart = () => {
  return (
    <div className='text-center'>
      <h3 className='text-2xl pb-6'>Your cart is currently empty</h3>
      <FillBtn text='Return to shop' url='/' className='w-fit' />
    </div>
  );
};

export default Cart;
