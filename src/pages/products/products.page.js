import React from 'react';
import SHOP_DATA from '../../data/shoes.data';

import TopTitle from '../../components/top-title/top-title.component';

import ProductsWrapper from './wrappers/products/products.wrapper';

const ProductsPage = ({ match: { params: { brandId }} }) => (
  <>
    <TopTitle value={`${SHOP_DATA[brandId.toString()].title} Shoes`} />
    <ProductsWrapper items={SHOP_DATA[brandId.toString()].items} />
  </>
);

export default ProductsPage;
