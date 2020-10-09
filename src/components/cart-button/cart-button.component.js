import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/icons/shopping-bag.svg';

import './cart-button.styles.scss';

const CartButton = ({ onClick, theme, itemsCount }) => {
  let classes = 'cart-button';

  if (theme) {
    classes += ` cart-button--theme--${theme}`
  }

  return (
    <div className={classes} onClick={onClick}>
      <ShoppingIcon className="cart-button__icon" />
      <span className="cart-button__counter">{itemsCount}</span>
    </div>
  )
};

const mapStateToProps = state => ({
  itemsCount: state.cart.cartItems.reduce((acc, item) => acc += item.quantity, 0)
});

export default connect(mapStateToProps)(CartButton);
