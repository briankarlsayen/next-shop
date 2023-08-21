export const updateCartApi = (value: any) => {
  localStorage.setItem('cart', JSON.stringify(value));
}

export const emptyCartApi = () => {
  localStorage.removeItem('cart');
}