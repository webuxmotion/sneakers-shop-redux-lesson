import React from 'react';
import { Route } from 'react-router-dom';

import TopTitle from '../../components/top-title/top-title.component';

import ProductsPage from '../../pages/products/products.page';

import BrandsWrapper from './wrappers/brands/brands.wrapper';

const ShopPage = ({ match }) => (
  <>
    <Route exact path={`${match.path}`} component={() => (
      <>
        <TopTitle value="All Brands" />
        <BrandsWrapper />
      </>
    )} />
    <Route path={`${match.path}/:brandId`} component={ProductsPage} />
  </>
);

export default ShopPage;
