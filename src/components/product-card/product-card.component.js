import React from 'react';

import Button from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ item }) => {
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
          <Button>+ Add to cart</Button>
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

export default ProductCard;
