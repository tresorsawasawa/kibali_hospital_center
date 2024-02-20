import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../../assets/images/logo.png';

const links = [
  {
    id: 1,
    label: 'home',
    name: 'Home',
    to: '/',
  },
  {
    id: 2,
    name: 'Services',
    label: 'services',
    to: '/services',
  },
  {
    id: 3,
    name: 'Your arrival',
    label: 'arrival',
    to: '/arrivals',
  },
  {
    id: 4,
    name: 'Pages',
    label: 'pages',
    to: '/page',
  },
  {
    id: 5,
    name: 'About',
    label: 'about',
    to: '/about_us',
  },
  {
    id: 6,
    name: 'Contact',
    label: 'contact',
    to: '/contact_us',
  },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="header w-[85%] flex justify-between items-center">
      <div className="LogoContainer py-1 flex justify-center items-center h-50 w-100">
        <NavLink to="/" className="LogoContent py-[12px] flex justify-center items-center flex-col">
          <img src={Logo} alt="Logo" className="w-100 h-auto" />
        </NavLink>
      </div>

      <nav className="navbar w-full py-1">
        <ul className="navLinks flex justify-end items-center gap-[2rem]">
          {links.map(({
            id, name, to, label,
          }) => (
            <li key={id} className="linkItem cursor-pointer">
              <NavLink
                key={id}
                to={to}
                onClick={() => handleLinkClick(label)}
                className={activeLink === name ? 'active navLink text-[16px] uppercase' : 'navLink text-[18px] uppercase'}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
