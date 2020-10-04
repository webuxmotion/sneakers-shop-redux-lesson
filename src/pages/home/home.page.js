import React, { useEffect } from 'react';

import Slider from '../../components/slider/slider.component';

import FeaturedWrapper from './wrappers/featured/featured.wrapper';
import BrandsWrapper from './wrappers/brands/brands.wrapper';

const HomePage = ({ setIndexPage }) => {
  useEffect(
    () => {
      setIndexPage(true);

      return () => setIndexPage(false);
    }
  );

  return (
    <>
      <Slider />
      <BrandsWrapper />
      <FeaturedWrapper />
    </>
  );
}

export default HomePage;
