import React from 'react';
import logo from '../../../src/images/logo.png';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const { user, singOutUser } = useAuth()
  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="logo" />
        <div className="hotline">
          <p>khayrul2525@gmail.com</p>
          <p>+88 0176-3155578</p>
        </div>
      </div>
      <div className="navigation">
        <nav>
          <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/review">Order Review</NavLink></li>
            <li><NavLink to="/inventory">Manage Inventory Here</NavLink></li>
          </ul>
          <div className='cart-regi'>
            <div className='login-regi'>
              {
                user.email ?
                  <div className='userActice'>
                    <button onClick={singOutUser}>Sing Out</button>
                    <img src={user.photoURL} alt="" />
                  </div>
                  :
                  <div>
                    <NavLink className="login-btn" to="/login">Login</NavLink>
                    <NavLink className="login-btn" to="/registration">Registration</NavLink>
                  </div>
              }
            </div>
            <div className="cartIcon">
              <FontAwesomeIcon className="icon" icon={faShoppingCart} />
              <p>0</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header