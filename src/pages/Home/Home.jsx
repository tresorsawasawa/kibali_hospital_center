/* eslint-disable max-len */
import React from 'react';
// import { FaChevronRight } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import {
  FaUserDoctor,
  FaBedPulse,
  FaMicroscope,
} from 'react-icons/fa6';
import { FaAmbulance } from 'react-icons/fa';
import AboutBg from '../../assets/images/about.jpg';
import './Home.scss';
import Testimonials from '../Testimonials/Testimonials';

const aboutData = [
  {
    id: uuid(),
    icon: <FaUserDoctor />,
    qualification: 'Good',
    status: 'Doctors',
  },
  {
    id: uuid(),
    icon: <FaBedPulse />,
    qualification: 'Emergency',
    status: 'Services',
  },
  {
    id: uuid(),
    icon: <FaMicroscope />,
    qualification: 'Accurate',
    status: 'Testing',
  },
  {
    id: uuid(),
    icon: <FaAmbulance />,
    qualification: 'Free',
    status: 'Ambulance',
  },
];

const Home = () => (
  <>
    <section className="hero w-full pt-[10rem] flex justify-center items-center">
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

    <section className="about w-full mt-[-5rem]">
      <div className="wrapper w-full pt-[12rem]">
        <div className="inner1 w-[85%] flex gap-[3rem] my-0 mx-auto pb-[4rem]">
          <div className="aboutLeft relative w-[40%] gap-[1.5rem]">
            <img
              src={AboutBg}
              alt="About pic"
              className="object-cover absolute w-full h-full rounded-[1rem]"
            />
          </div>
          <div className="aboutRight w-[60%] flex flex-col gap-[2rem]">
            <div className="headings flex flex-col gap-[1.5rem]">
              <h2 className="secTitle uppercase text-[20px] font-[600] text-[#13c5dd] relative">About us</h2>
              <h1 className="text-[3rem] font-[700] leading-[4rem]">
                Best Medical Care For Yourself and Your Family
              </h1>
            </div>

            <p className="text-justify text-[1.2rem] text-[#848e9f]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste rerum sint numquam, quae culpa architecto fugit corporis repellat odit voluptates, eum consequatur reprehenderit, minima officiis explicabo illo dolores alias quisquam inventore nemo aperiam. Quis quam, perspiciatis laudantium, mollitia at corrupti natus qui explicabo maxime rem velit quasi asperiores veniam.
            </p>

            <ul className="highlightFeatures flex justify-between items-center">
              {aboutData.map((item) => (
                <li key={item.id} className="item bg-[#eff5f9] flex justify-center items-center flex-col w-[9rem] h-[9rem] rounded-full">
                  <div className="icon text-[3rem] text-[#13c5dd]">{item.icon}</div>
                  <div className="qualification pt-[1.1rem] leading-1.2 font-[700]">
                    {item.qualification}
                  </div>
                  <div className="status text-[14px] text-[#13c5dd] font-[600]">{item.status}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div className="padTop50">
      <Testimonials />
    </div>
  </>
);

export default Home;
