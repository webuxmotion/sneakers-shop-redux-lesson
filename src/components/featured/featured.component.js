import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../title/title.component';
import ProductCard from '../product-card/product-card.component';

import './featured.styles.scss';

const Featured = ({ title = '', items = [], action = null }) => (
  <div className='featured'>
    <div className="featured__header">
      <Title theme="dark" value={title} />
      {
        action
          ? <Link to={action.link} className="featured__action">{action.text}</Link>
          : null
      }
    </div>
    <div className="featured__list">
    {
      items
        .filter((_, idx) => idx < 5)
        .map(item => (
          <div className="featured__item" key={item.id}>
            <ProductCard item={item} />
          </div>
        ))
    }
    </div>
  </div>
);

export default Featured;
