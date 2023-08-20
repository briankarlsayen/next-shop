import { create } from 'zustand';

interface IZustand {
  set?: any;
  get?: any;
}

const cartFinalSubTotal = () => {
  const cartItems = localStorage?.getItem('cart');
  let totalArrSum = 0;
  if (cartItems) {
    let parsedCart = JSON.parse(cartItems);
    for (let value of parsedCart) {
      totalArrSum = parseFloat((totalArrSum + value.subTotal).toFixed(2))
    }
  }
  return totalArrSum
}

const billingInfo = {
  fullName: '',
  country: '',
  street: '',
  city: '',
  zcode: '',
  phone: '',
  email: '',
  shippingOpt: 'solo',
  cartSubTotal: cartFinalSubTotal()
};
const step = 1
const MAX_STEP = 3

const paymentMethod = 'paypal'



const updateBilling = ({ set, get, value }: any) => {
  const billing = get().billingInfo
  set({ billingInfo: { ...billing, ...value } });
};

const updatePaymentMethod = ({ set, value }: any) => {
  set({ paymentMethod: value })
}

const updateStep = ({ set, value }: any) => {
  set({ step: value })
}

const configStoreObject = (set: any, get: any) => ({
  billingInfo,
  step,
  paymentMethod,
  updateBilling: (value: any) =>
    updateBilling({ set, get, value }),
  updatePaymentMethod: (value: string) => updatePaymentMethod({ set, value }),
  updateStep: (value: number) => updateStep({ set, value })
});

export const checkoutStore = create(configStoreObject);
