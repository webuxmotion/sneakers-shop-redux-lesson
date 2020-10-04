import React from 'react';
import BRANDS_DATA from '../../../../data/brands.data';

import Brands from '../../../../components/brands/brands.component';

import './brands.styles.scss';

const BrandsWrapper = () => (
  <div className="home-page-brands-wrapper">
    <Brands
      items={BRANDS_DATA.filter((_, idx) => idx < 4)}
    />
  </div>
);

export default BrandsWrapper;
