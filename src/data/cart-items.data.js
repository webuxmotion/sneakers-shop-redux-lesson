import SHOP_DATA from './shoes.data';

const CART_ITEMS = SHOP_DATA.adidas.items
  .filter((_, idx) => idx < 2)
  .map(item => ({
    quantity: item.id * 2,
    ...item
  }));

export const total = CART_ITEMS
  .reduce((acc, item) => acc + item.quantity * item.price, 0);

export default CART_ITEMS;
