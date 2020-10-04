import React from 'react';
import CART_ITEMS, { total } from '../../data/cart-items.data';

import TopTitle from '../../components/top-title/top-title.component';
import CartItem from '../../components/cart-item/cart-item.component';
import Button from '../../components/button/button.component';

import './checkout.styles.scss';

const CheckoutPage = () => (
  <div className="checkout-page">
    <TopTitle value="Checkout" />
    <div className="checkout-page__body">
      <div className="checkout-page__list">
        {
          CART_ITEMS.map(item => <CartItem key={item.id} item={item} counter />)
        }
      </div>
      <div className='checkout-page__footer'>
        <div className='checkout-page__total'>
          <span className="checkout-page__total-title">Total:</span>
          <span className="checkout-page__total-value">${total}.00</span>
        </div>
        <div className="checkout-page__button-wrapper">
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  </div>
);

export default CheckoutPage;
