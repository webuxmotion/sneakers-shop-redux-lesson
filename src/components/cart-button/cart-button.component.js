import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/icons/shopping-bag.svg';

import './cart-button.styles.scss';

const CartButton = ({ onClick, theme }) => {
  let classes = 'cart-button';

  if (theme) {
    classes += ` cart-button--theme--${theme}`
  }

  return (
    <div className={classes} onClick={onClick}>
      <ShoppingIcon className="cart-button__icon" />
      <span className="cart-button__counter">20</span>
    </div>
  )
};

export default CartButton;
