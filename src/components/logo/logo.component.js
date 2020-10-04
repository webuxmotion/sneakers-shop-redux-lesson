import React from 'react';
import { Link } from 'react-router-dom';

import './logo.styles.scss';

const Logo = ({ size, theme }) => {
  let classes = 'logo';

  if (theme) {
    classes += ` logo--theme--${theme}`
  }

  if (size) {
    classes += ` logo--size--${size}`
  }

  return (
    <Link to="/" className={classes}>Sneakers</Link>
  );
};

export default Logo;
