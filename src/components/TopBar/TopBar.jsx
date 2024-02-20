import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaWhatsapp, FaFacebookF, FaXTwitter, FaLinkedinIn, FaPhone,
} from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import './TopBar.scss';
import FrenchFlag from '../../assets/images/france-flag-icon.svg';
import UkFlag from '../../assets/images/united-kingdom-flag-icon.svg';

const TopBar = () => {
  const socials = [
    {
      id: 1,
      icon: <FaWhatsapp />,
      to: '/',
    },
    {
      id: 2,
      icon: <FaFacebookF />,
      to: '/',
    },
    {
      id: 3,
      icon: <FaXTwitter />,
      to: '/',
    },
    {
      id: 4,
      icon: <FaLinkedinIn />,
      to: '/https://www.linkedin.com/in/centre-hospitalier-kibali-590211184',
    },
  ];
  return (
    <div className="topInfo text-white text-[14px]">
      <div className="inner flex justify-end items-center gap-[3rem]">
        <div className="contentNumEmail py-[7px] flex gap-[1rem]">
          <span className="flex justify-center items-center">
            <span className="px-2"><MdOutlineMailOutline /></span>
            {' '}
            email@example.com
          </span>
          <span className="flex justify-center items-center">
            <span className="px-2"><FaPhone /></span>
            {' '}
            +243 970 000 000
          </span>
        </div>

        <ul className="links flex justify-center items-center py-[7px]">
          {socials.map(({
            id, icon, to,
          }) => (
            <li key={id} className="mx-1">
              <NavLink key={id} to={to} className="transform hover:scale-x-115 transition-transform duration-300 text-[16px]">
                {icon}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="flags flex justify-center items-center gap-[12px] py-[7px]">
          <li className="french flex justify-center items-center cursor-pointer">
            <img src={FrenchFlag} className="h-18 gap-[2px]" alt="French Flag" />
            <span className="text-14">FR</span>
          </li>
          <li className="english flex justify-center items-center gap-[2px] cursor-pointer">
            <img src={UkFlag} className="text-[18px]" alt="Uk Flag" />
            <span className="text">EN</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
