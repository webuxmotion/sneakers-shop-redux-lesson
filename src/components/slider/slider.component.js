import React from 'react';
import Slider from "react-slick";

import Button from '../button/button.component';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.styles.scss';

const sliderItems = [
  {
    titleInfo: 'Big sale up to 20% off',
    title: 'NIKE RUN SHOES',
    text: 'THIS BRAND HAS MANY VARIANTS',
    link: '/shop/nike',
    image: 'hero-nike.jpg'
  },
  {
    titleInfo: 'Big sale up to 20% off',
    title: 'PUMA RUN SHOES',
    text: 'THIS BRAND HAS MANY VARIANTS',
    link: '/shop/puma',
    image: 'hero-puma.jpg'
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const SliderComponent = () => (
  <Slider className="slider" {...settings}>
    {
      sliderItems.map(({ titleInfo, title, text, link, image }) => (
        <div className="slider__item" key={image}>
          <div className="slider__bg" style={{
            backgroundImage: `url(/images/${image})`
          }}></div>
          <div className="slider__info">
            <p className="slider__title-info">{titleInfo}</p>
            <h2 className="slider__title">{title}</h2>
            <p className="slider__text">{text}</p>
            <Button theme="outlined-light" to={link}>Shop Now</Button>
          </div>
        </div>
      ))
    }
  </Slider>
);

export default SliderComponent;
