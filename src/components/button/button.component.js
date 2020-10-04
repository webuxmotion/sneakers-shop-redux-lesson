import React from 'react';
import { Link } from 'react-router-dom';

import './button.styles.scss';

const Button = ({ children, theme, fluid, ...rest }) => {
  let classes = 'button';
  let CustomTag = 'button';

  if (theme) {
    classes += ` button--theme--${theme}`
  }

  if (fluid) {
    classes += ` button--fluid`
  }

  if (rest.to) {
    CustomTag = Link;
  }

  return (
    <CustomTag className={classes} {...rest}>
      {children}
    </CustomTag>
  )
};

export default Button;
