import React from 'react';

import { ReactComponent as DeleteIcon } from '../../assets/icons/close.svg';

import './cart-item.styles.scss';

const CartItem = ({ item, counter }) => {
  const { image, price, quantity, name } = item;
  
  return (
    <div className="cart-item">
      <div className="cart-item__image-column">
        <div className="cart-item__image-wrapper">
          <div className="cart-item__image-bg" style={{
            backgroundImage: `url(/images/${image})`
          }}></div>
        </div>
      </div>
      <div className="cart-item__info-column">
        <h2 className="cart-item__title">{name}</h2>
        <div className="cart-item__price-group">
          <span>{quantity}</span>
          <span className="cart-item__multiply">x</span>
          <span className="cart-item__price">${price}.00</span>
        </div>
        {
          counter ? (
            <div className="cart-item__counter">
              <span className="cart-item__counter-button">-</span>
              <span className="cart-item__counter-value">{quantity}</span>
              <span className="cart-item__counter-button">+</span>
            </div>
          ) : null
        }
      </div>
      <span className="cart-item__delete-button">
        <DeleteIcon className="cart-item__delete-icon" />
      </span>
    </div>
  );
};

export default CartItem;
