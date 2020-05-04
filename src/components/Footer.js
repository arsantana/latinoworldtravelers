import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/lwt-logo.png';

const Footer = () => (
  <div className="footer">
    <div className="footer__logo-box">
      <img src={logo} alt="" className="footer__logo"/>
    </div>
    <div className="footer__navigation">
      <ul className="footer__list">
        <li className="footer__item"><Link to="/" className="footer__link">About</Link></li>
        <li className="footer__item"><Link to="/" className="footer__link">Services</Link></li>
        <li className="footer__item"><Link to="/" className="footer__link">Destinations</Link></li>
      </ul>
      <ul className="footer__list">
        <li className="footer__item">Terms & Conditions</li>
        <li className="footer__item">Privacy Policy</li>
        <li className="footer__item">Another Item</li>
      </ul>
      <ul className="footer__list">
        <li className="footer__item">Item 1</li>
        <li className="footer__item">Item 2</li>
        <li className="footer__item">Item 3</li>
      </ul>
    </div>
  </div>
);

export default Footer;