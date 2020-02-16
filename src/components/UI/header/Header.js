import React from 'react';
import logo from '../../../logo.png';
import '../../../index.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt={'Rockstars IT Logo'} className="header__img"></img>
      <h1>Rock-IT NOW</h1>
    </header>
  );
};

export default Header;
