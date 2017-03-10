import React from 'react';
import header from './header.css';

const Header = ({title}) => {
  return (
    <header className={header.container}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
