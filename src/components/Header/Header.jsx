import React from 'react';
import TopInfos from '../TopBar/TopBar';
import Navbar from '../Navbar/Navbar';
import './Header.scss';

const Header = () => (
  <header className="Header w-full z-999 border border-red-700">
    <TopInfos />
    <Navbar />
  </header>
);

export default Header;
