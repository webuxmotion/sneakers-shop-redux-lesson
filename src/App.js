import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import CheckoutPage from './pages/checkout/checkout.page';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Cart from './components/cart/cart.component';

import './App.css';

function App() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [indexPage, setIndexPage] = useState(false);
  
  return (
    <div className="app">
      <div className="app__content">
        <Cart open={isOpenCart} setIsOpenCart={setIsOpenCart} />
        <Header setIsOpenCart={setIsOpenCart} absolute={indexPage ? true : null} theme={`${indexPage ? "transparent-light" : null}`}  />
        <Switch>
          <Route exact path='/' component={() => <HomePage setIndexPage={setIndexPage} />} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
