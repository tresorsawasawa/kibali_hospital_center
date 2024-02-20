/* eslint-disable max-len */
import React from 'react';
// import { FaChevronRight } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import './Home.scss';

const Home = () => (
  <section className="hero w-full flex justify-center items-center">
    <div className="wrapper w-[85%] text-white gap-[2rem] flex justify-between items-start flex-col">
      <div className="welcomeAd relative px-[13px] py-[20px]">
        <div className="background" />
        <h5 className="text-[20px] uppercase">Welcome to Kibali Hospital Center</h5>
      </div>

      <h1 className="heroText uppercase font-[700] text-[4rem]">Wide range of medical services.</h1>

      <p className="desc text-[20px] font-[500] text-justify">
        We take pride in providing a diverse range of medical services to meet the needs of your entire family.
      </p>

      <div className="buttonsContainer flex gap-[2rem] pt-[2rem]">
        <NavLink
          to="/our_doctors"
          className="btn text-[20px]"
        >
          Find Doctor
        </NavLink>

        <NavLink
          to="/appointment"
          className="btn text-[20px]"
        >
          Appointment
        </NavLink>
      </div>
    </div>
  </section>
);

export default Home;
