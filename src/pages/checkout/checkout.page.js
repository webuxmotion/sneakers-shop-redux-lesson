import React from 'react';
import { connect } from 'react-redux';

import TopTitle from '../../components/top-title/top-title.component';
import CartItem from '../../components/cart-item/cart-item.component';
import Button from '../../components/button/button.component';

import './checkout.styles.scss';

const CheckoutPage = ({ items, total }) => {

  return (
    <div className="checkout-page">
      <TopTitle value="Checkout" />
      <div className="checkout-page__body">
        <div className="checkout-page__list">
          {
            items.map(item => <CartItem key={item.id} item={item} counter />)
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
  )
};

const mapStateToProps = ({ cart: { cartItems }}) => ({
  items: cartItems,
  total: cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0)
});

export default connect(mapStateToProps)(CheckoutPage);
