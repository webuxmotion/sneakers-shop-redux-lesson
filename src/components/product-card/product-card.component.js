import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import Button from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ item, addItem }) => {
  const { name, image, price, oldPrice } = item;

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <div className="product-card__image-bg" style={{
          backgroundImage: `url(/images/${image})`
        }}></div>
        {
          oldPrice
            ? <div className="product-card__sale">Sale</div>
            : null
        }
        <div className="product-card__button-wrapper">
          <Button onClick={() => addItem(item)}>+ Add to cart</Button>
        </div>
      </div>
      <div className="product-card__info">
        <p className="product-card__title">{name}</p>
        <div>
          {
            oldPrice
              ? <span className="product-card__price-item product-card__price-item--old">${oldPrice}.00</span>
              : null
          }
          <span className="product-card__price-item">${price}.00</span>
        </div>
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ProductCard);
