/* eslint-disable max-len */
import React from 'react';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import './Services.scss';
import servicesData from './data';
import Testimonials from '../Testimonials/Testimonials';

const Services = () => (
  <section className="services w-full pt-[12rem]">
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
            <div className="col-lg-6">
              <div className="bg-white text-center rounded p-5">
                <h1 className="mb-4">Book An Appointment</h1>
                <form>
                  <div className="row g-3">
                    <div className="">
                      <select className="form-select bg-light border-0">
                        <option selected="">Choose Department</option>
                        <option value="1">Department 1</option>
                        <option value="2">Department 2</option>
                        <option value="3">Department 3</option>
                      </select>
                    </div>
                    <div className="">
                      <select className="form-select bg-light border-0">
                        <option selected="">Select Doctor</option>
                        <option value="1">Doctor 1</option>
                        <option value="2">Doctor 2</option>
                        <option value="3">Doctor 3</option>
                      </select>
                    </div>
                    <div className="">
                      <input type="text" className="form-control bg-light border-0" placeholder="Your Name" />
                    </div>
                    <div className="">
                      <input type="email" className="form-control bg-light border-0" placeholder="Your Email" />
                    </div>
                    <div className="">
                      <div className="date" id="date">
                        <input type="date" className="" placeholder="Date" />
                      </div>
                    </div>
                    <div className="">
                      <div className="time" id="time">
                        <input type="time" className="form-control bg-light border-0 datetimepicker-input" placeholder="Time" />
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Make An Appointment</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-[-6rem]">
      <Testimonials />
    </div>
  </section>

);

export default Services;
