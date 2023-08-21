import { create } from 'zustand';

interface IZustand {
  set?: any;
  get?: any;
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
  cartSubTotal: 0
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
