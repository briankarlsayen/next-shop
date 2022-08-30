import {useState} from 'react'

const checkout = () => {
  const [billing, setBilling] = useState(
    {
      fullName: '',
      country: '',
    }
  )

  const updateField = (e) => {
    console.log(e)
    setBilling({
      ...billing,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>
      <div className='x-spacing'>
        <p className='w-full'>Home / Checkout</p>
        <div className='text-center'>
          <h2 className='text-4xl py-12 font-semibold'>Checkout</h2>
        </div>
        <div className='max-w-[80rem] mx-auto flex flex-row w-full gap-4'>
          <div className='w-full border'>
            <h2 className='text-subheader pb-4'>Billing Details</h2>
            <form className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs mb-2" htmlFor="fullName">Full Name</label>
                <input className="appearance-none block w-full bg-white text-gray-900 font-medium border
                  border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" name="fullName" type="text"
                  id="fullName" value={billing.fullName} onChange={updateField} required />
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs mb-2" htmlFor="country">Country</label>
                <input className="appearance-none block w-full bg-white text-gray-900 font-medium border
                  border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" name="country" type="text"
                  id="country" value={billing.country} onChange={updateField} required />
              </div>
            </form>
          </div>
          <div className='w-full border'>
            <h2 className='text-subheader pb-4'>Your Order</h2>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <h4>Product</h4>
                <h4 className='basis-1/3'>Subtotal</h4>
              </div>
              <div>
                <ul>
                  <li className='flex justify-between'>
                    <p>Sauder Boulevard Cafe Lounge Chair, Camel finish  × 1</p>
                    <p className='basis-1/3'>$168.99</p>
                  </li>
                  <li className='flex justify-between'>
                    <p>Sauder Boulevard Cafe Lounge Chair, Camel finish  × 1</p>
                    <p className='basis-1/3'>$168.99</p>
                  </li>
                </ul>
              </div>
              <div className='flex justify-between'>
                <h4>Subtotal</h4>
                <p className='basis-1/3'>$168.99</p>
              </div>
              <div className='flex justify-between items-center'>
                <h4>Shipping</h4>
                <form className='basis-1/3'>
                  <ul>
                    <li className='flex'>
                      <label htmlFor="shippingOpt" >
                        <input className='mr-2' type="radio" name="shippingOpt" id="shippingOpt" 
                        value="solo" />
                      </label>
                      Flat rate
                    </li>
                    <li className='flex'>
                      <label htmlFor="shippingOpt" >
                        <input className='mr-2' type="radio" name="shippingOpt" id="shippingOpt" 
                        value="free-ship"/>
                        Free shipping
                      </label>
                    </li>
                    <li className='flex'>
                      <label htmlFor="shippingOpt" >
                        <input className='mr-2' type="radio" name="shippingOpt" id="shippingOpt" 
                        value="local" />
                        Local pickup
                      </label>
                    </li>
                  </ul>
                </form>
              </div>
              <div className='flex justify-between'>
                <h4>Total</h4>
                <p className='basis-1/3'>$168.99</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="border-b-2 pt-32"></div>
    </div>
  )
}

export default checkout