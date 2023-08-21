import { create } from 'zustand';
import { CartItem, SubTotalPrice } from '../types';

const cart = [] as CartItem[]
const totalArr = [] as SubTotalPrice[]
const cartSubTotal = 0 as number

const cartFinalSubTotal = (cartItems: any) => {
  let totalArrSum = 0;
  if (cartItems.length) {
    for (let value of cartItems) {
      totalArrSum = parseFloat((totalArrSum + value.subTotal).toFixed(2));
    }
  }
  return totalArrSum;
};

const updateCart = ({ set, get, value }: any) => {
  const subTotal = cartFinalSubTotal(value)
  set({ cart: value, cartSubTotal: subTotal })
}

const updateCartTotal = ({ set, get, value }: any) => {
  set({ totalArr: value })
}

const updateCartSubTotal = ({ set, get, value }: any) => {
  set({ cartSubTotal: value })
}

const cartStoreObject = (set: any, get: any) => ({
  cart,
  totalArr,
  cartSubTotal,
  updateCart: (value: any) =>
    updateCart({ set, get, value }),
  updateCartTotal: (value: any) =>
    updateCartTotal({ set, get, value }),
  updateCartSubTotal: (value: any) =>
    updateCartSubTotal({ set, get, value }),
});

export const cartStore = create(cartStoreObject);
