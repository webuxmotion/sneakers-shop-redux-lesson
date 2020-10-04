import React from 'react';
import { Link } from 'react-router-dom';

import './brand-item.styles.scss';

const MenuItem = ({ title, image, link }) => (
  <div className="brand-item">
    <Link to={link} className="brand-item__image-wrapper">
      <div className="brand-item__image-bg" style={{
        backgroundImage: `url(/images/${image})`
      }}></div>
    </Link>
    <div className="brand-item__info">
      <Link to={link} className="brand-item__title">{title}</Link>
      <div className="brand-item__columns">
        <div className="brand-item__column">
          <span className="brand-item__counter">14 Products</span>
        </div>
        <div className="brand-item__column">
          <Link to={link} className="brand-item__bottom-link">+ Shop Collection</Link>
        </div>
      </div>
    </div>
  </div>
);

export default MenuItem;
