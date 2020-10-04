import React from 'react';
import { Link } from 'react-router-dom';

import CartButton from '../cart-button/cart-button.component';
import Logo from '../logo/logo.component';

import './header.styles.scss';

const Header = ({ setIsOpenCart, absolute, fixed, theme }) => {
  let classes = 'header';

  if (absolute) {
    classes += ' is-absolute'
  }

  if (fixed) {
    classes += ' is-fixed'
  }

  if (theme) {
    classes += ` header--theme--${theme}`;
  }

  return (
    <header className={classes}>
      <div className="header__bg"></div>
      <div className="header__columns">
        <div className="header__column">
          <Logo theme={theme !== 'transparent-light' ? 'dark' : null} />
        </div>
        <div className="header__column header__column--big">
          <nav className="header__nav">
            <Link to="/" className="header__link">Home</Link>
            <Link to="/shop" className="header__link">Shop</Link>
          </nav>
        </div>
        <div className="header__column">
          <nav className="header__nav">
            <Link to="/login" className="header__link">Login</Link>
          </nav>
          <div className="header__cart-button-wrapper">
            <CartButton onClick={() => setIsOpenCart(true)} theme={theme !== 'transparent-light' ? 'dark' : null} />
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
