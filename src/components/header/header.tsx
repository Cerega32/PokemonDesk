import React from 'react';

import logo from './logo.png';
import './style.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <nav className="header__links">
          <a href="#" className="header__link header__link--active">
            Home
          </a>
          <a href="#" className="header__link">
            Pok&#232;dex
          </a>
          <a href="#" className="header__link">
            Legendaries
          </a>
          <a href="#" className="header__link">
            Documentation
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
