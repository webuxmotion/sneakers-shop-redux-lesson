import CartActionTypes from './cart.types';

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItemById = id => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: id
});

export const increaseItem = id => ({
  type: CartActionTypes.INCREASE_ITEM,
  payload: id
});

export const decreaseItem = id => ({
  type: CartActionTypes.DECREASE_ITEM,
  payload: id
});
