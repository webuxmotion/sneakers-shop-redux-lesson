import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

import './cart.styles.scss';

const Cart = ({ open, setIsOpenCart, history, items, total }) => {
  let classes = 'cart';

  if (open) {
    classes += ' is-open'
  }

  return (
    <div className={classes}>
      <div className='cart__body'>
        <div className='cart__header-wrapper'>
          <div className='cart__header'>
            <h2>Cart</h2>
            <CloseIcon className="cart__close" onClick={() => setIsOpenCart(false)} />
          </div>
        </div>
        <div className='cart__list'>
          {
            items.map(item => <CartItem key={item.id} item={item} />)
          }
        </div>
        <div className='cart__footer'>
          <div className='cart__total'>
            <span className="cart__total-title">Total</span>
            <span className="cart__total-value">${total}.00</span>
          </div>
          <div className='cart__button-wrap'>
            <Button fluid onClick={() => {
              setIsOpenCart(false);

              history.push('/checkout');
            }}>Checkout</Button>
          </div>
        </div>
      </div>
      <div className='cart__bg' onClick={() => setIsOpenCart(false)}></div>
    </div>
  )
};

const mapStateToProps = ({ cart: { cartItems }}) => ({
  items: cartItems,
  total: cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0)
});

export default withRouter(
  connect(mapStateToProps)(Cart)
);
