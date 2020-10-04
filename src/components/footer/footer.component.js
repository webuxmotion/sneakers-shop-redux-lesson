import React from 'react';

import Logo from '../logo/logo.component';
import Title from '../title/title.component';
import SubscribeForm from '../subscribe-form/subscribe-form.component';

import './footer.styles.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__top">
      <div className="footer__top-row">
        <Title value="Keep Connected" />
      </div>
      <div className="footer__top-row">
        <p className="footer__message footer__message--subscribe">Get updates by subscribe our weekly newsletter</p>
      </div>
      <div className="footer__top-row">
        <SubscribeForm />
      </div>
    </div>
    <div className="footer__bottom">
      <div className="footer__bottom-column">
        <Logo size="small" />
      </div>
      <div className="footer__bottom-column footer__bottom-column--big">
        <p className="footer__message">Get updates by subscribe our weekly newsletter</p>
      </div>
      <div className="footer__bottom-column">
        <img src="/images/payments.png" className="footer__image" alt="payments" />
      </div>
    </div>
  </footer>
);

export default Footer;
