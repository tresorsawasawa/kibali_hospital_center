/* eslint-disable no-return-assign */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import {
  FaUserDoctor,
  FaBedPulse,
  FaMicroscope,
} from 'react-icons/fa6';
import { FaAmbulance } from 'react-icons/fa';
import servicesData from '../Services/data';
import { departments } from '../About/data';
import AboutBg from '../../assets/images/about.jpg';
import './Home.scss';
import Testimonials from '../Testimonials/Testimonials';
import Team from '../Team/Team';

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

const Home = () => {
  const [selected, setSelected] = useState(departments[0].value);

  const handleChange = (event) => setSelected(event.target.value);

  return (
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

      <div className="inner2 w-full bg-[#13c5dd] flex items-center justify-center flex-col py-[5rem] gap-[3rem]">
        <div className="headings flex items-center justify-center flex-col gap-[2rem]">
          <h2 className="secTitle2 uppercase text-[20px] font-[600] relative text-white">
            Find a doctor
          </h2>
          <h1 className="text-center text-[3rem] font-[700] leading-[4rem] max-w-[700px] capitalize">
            Find A Healthcare Professionals
          </h1>
        </div>

        <p className="text-center text-[1.2rem] text-white max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste rerum sint numquam, quae culpa architecto fugit corporis repellat odit voluptates, eum consequatur reprehenderit, minima officiis explicabo illo dolores alias quisquam inventore nemo aperiam. Quis quam, perspiciatis laudantium, mollitia at corrupti natus qui explicabo maxime rem velit quasi asperiores veniam.
        </p>

        <div className="inputGroup w-full max-w-[600px]">
          <select className="form-select px-[12px] py-[16px] border-none outline-none mr-[2px] rounded-le">
            {departments.map((item) => (
              <option value={selected} onChange={handleChange} className="text-[#1d2a4d]" key={item.id}>{item.name}</option>
            ))}
          </select>
          <input type="text" className="px-[12px] py-[16px] border-none outline-none" placeholder="Keyword" />
          <button type="submit" className="px-[22px] py-[16px] border-none outline-none text-white bg-[#1d2a4d] brd8">Search</button>
        </div>
      </div>

      <section className="services w-full pt-[4rem]">
        <div className="wrapper w-full">
          <div className="inner w-[85%] flex flex-col gap-[3rem] my-0 mx-auto mb-[5rem]">
            <div className="headings flex flex-col items-center justify-center gap-[1.5rem] w-full">
              <h2 className="sectionTitle uppercase text-[20px] font-[600] text-[#13c5dd] relative">Services</h2>
              <h1 className="text-[3rem] font-[700] leading-[4rem] max-w-[600px] text-center">
                Excellent Medical Services
              </h1>
            </div>

            <ul className="servicesContent flex flex-wrap justify-center w-full">
              {servicesData.map(({
                id, icon, label, to, description,
              }) => (
                <li key={id} className="ServiceItem">
                  <div className="card text-center h-[350px] p-[1rem] flex flex-col justify-between items-center max-w-[350px] bg-[#eff5f9] rounded-[0.5rem]">
                    <div className="iconContent flex justify-center items-center w-[150px] h-[100px] rotate-[-14deg] bg-[#13c5dd] rounded-[50%]">
                      <span className="rotate-[14deg] font-[900] text-[2rem] text-white">
                        {icon}
                      </span>
                    </div>
                    <h4 className="title font-[600]">
                      {label}
                    </h4>
                    <p className="desc text-[#848e9f] leading-[1.5] font-[400]">
                      {description}
                    </p>

                    <NavLink to={to} className="btn flex items-center gap-[0.5rem] text-white">
                      DETAILS
                      <HiOutlineClipboardCheck />
                    </NavLink>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="appointment w-full pt-[4rem]">
        <div className="wrapper w-full">
          <div className="row w-full py-[5rem] bg-[#13c5dd]">
            <div className="inner1 w-[85%] flex gap-[3rem] my-0 mx-auto pb-[4rem]">
              <div className="aboutLeft relative w-[50%] flex flex-col gap-[2rem]">
                <div className="headings flex flex-col gap-[1.5rem]">
                  <h2 className="appointmentTitle  uppercase text-[20px] font-[600] text-white relative">Appointment</h2>
                  <h1 className="text-[3rem] font-[700] leading-[4rem]">
                    Make An Appointment For Your Family
                  </h1>
                </div>

                <p className="text-justify text-[1.1rem] text-white">
                  Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.
                </p>

                <div className="buttonsContainer text-white flex gap-[2rem] pt-[2rem] font-[500]">
                  <NavLink
                    to="/our_doctors"
                    className="text-[20px]"
                  >
                    Find Doctor
                  </NavLink>

                  <NavLink
                    to="/appointment"
                    className="text-[20px]"
                  >
                    Read More
                  </NavLink>
                </div>
              </div>

              <div className="aboutRight w-[50%] flex flex-col gap-[2rem]">
                <div className="bg-white flex flex-col text-center rounded px-[2rem] gap-[2rem] py-[3rem]">
                  <h1 className="mb-4 text-[2rem] font-bold">Book An Appointment</h1>
                  <form className="flex gap-[1rem]">
                    <div className="left flex flex-col gap-[1rem]">
                      <div className="DepartmentsList">
                        <select className="form-select bg-light border-0 w-[100%] text-[#848e9f] bg-[#eff5f9] py-[0.5rem] px-[1rem]">
                          <option selected="">Choose Department</option>
                          <option value="1">Department 1</option>
                          <option value="2">Department 2</option>
                          <option value="3">Department 3</option>
                        </select>
                      </div>
                      <div className="nameInputCont">
                        <input type="text" className="w-[100%] text-[#848e9f] bg-[#eff5f9] py-[0.5rem] px-[1rem]" placeholder="Your Name" />
                      </div>

                      <div className="dateInputcont">
                        <input
                          placeholder="Date"
                          type="text"
                          className="w-[100%] text-[#848e9f] bg-[#eff5f9] py-[0.5rem] px-[1rem]"
                          onFocus={(e) => (e.target.type = 'date')}
                          onBlur={(e) => (e.target.type = 'text')}
                          id="date"
                        />
                      </div>
                    </div>
                    <div className="right flex flex-col gap-[1rem]">
                      <div className="">
                        <select className="form-select bg-light border-0 w-[100%] text-[#848e9f] bg-[#eff5f9] py-[0.5rem] px-[1rem]">
                          <option selected="">Select Doctor</option>
                          <option value="1">Doctor 1</option>
                          <option value="2">Doctor 2</option>
                          <option value="3">Doctor 3</option>
                        </select>
                      </div>

                      <div className="emailInputCont">
                        <input type="email" className="w-[100%] text-[#848e9f] bg-[#eff5f9] py-[0.5rem] px-[1rem] bg-light border-0" placeholder="Your Email" />
                      </div>

                      <div className="timeInputcont">
                        <input
                          placeholder="Time"
                          type="time"
                          className="form-control bg-light border-0 w-[100%] text-[#848e9f] bg-[#eff5f9] py-[0.5rem] px-[1rem] outline-none"
                          onFocus={(e) => (e.target.type = 'time')}
                          onBlur={(e) => (e.target.type = 'text')}
                          id="time"
                        />
                      </div>
                    </div>
                  </form>
                  <div className="col-12">
                    <NavLink to="/appointment" className="btn btn-primary w-100 py-3 text-white font-bold" type="submit">Make An Appointment</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="padTop50">
        <Team />
      </div>

      <div className="padTop51">
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
