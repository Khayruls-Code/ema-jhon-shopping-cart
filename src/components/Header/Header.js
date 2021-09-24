import React from 'react';
import logo from '../../../src/images/logo.png';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  return (
    <div className="container">
      <div className="header">
      <img src={logo} alt="logo"/>
      <div className="hotline">
        <p>khayrul2525@gmail.com</p>
        <p>+88 0176-3155578</p>
      </div>
      </div>
      <div className="navigation">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Order Review</a></li>
          <li><a href="/">Manage Inventory Here</a></li>
        </ul>
        <div className="cartIcon">
          <FontAwesomeIcon className="icon" icon={faShoppingCart}/>
          <p>0</p>
        </div>
      </nav>
      </div>
    </div>
  );
};

export default Header