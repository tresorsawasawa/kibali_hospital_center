import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { FaCaretDown } from 'react-icons/fa';
import './Navbar.scss';
import Logo from '../../assets/images/logo.png';

const links = [
  {
    id: uuid(),
    icon: '',
    label: 'home',
    name: 'Home',
    to: '/',
  },
  {
    id: uuid(),
    icon: '',
    name: 'Services',
    label: 'services',
    to: '/services',
  },
  {
    id: uuid(),
    icon: <FaCaretDown />,
    name: 'Your arrival',
    label: 'arrival',
    to: '/arrivals',
  },
  {
    id: uuid(),
    icon: <FaCaretDown />,
    name: 'Pages',
    label: 'pages',
    to: '/',
  },
  {
    id: uuid(),
    icon: '',
    name: 'About',
    label: 'about',
    to: '/about_us',
  },
  {
    id: uuid(),
    icon: '',
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
            id, name, to, label, icon,
          }) => (
            <li key={id} className="linkItem cursor-pointer">
              <NavLink
                key={id}
                to={to}
                onClick={() => handleLinkClick(label)}
                className={activeLink === name ? 'flex active navLink text-[16px] uppercase justify-center items-center' : 'flex justify-center items-center navLink text-[18px] uppercase'}
              >
                <span>{name}</span>
                <span>{icon}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
