import React from 'react';

import BrandItem from '../brand-item/brand-item.component';

import './brands.styles.scss';

const Brands = ({ items = [] }) => (
  <div className="brands">
    <div className="brands__container">
      {
        items
          .map(({ id, ...rest }) => (
            <div className="brands__item" key={id}>
              <BrandItem key={id} {...rest} />
            </div>
          ))
      }
    </div>
  </div>
)

export default Brands;
