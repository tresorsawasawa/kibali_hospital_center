import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="notFoundContainer">
    <Link
      to="/"
      className="back-to-home"
    >
      <BsArrowLeft />
      <span>Click this to go Back To the Homepage</span>
    </Link>

    <div className="text-container">
      <h3>The page you opened doesn&apos;t exist.</h3>
    </div>
  </section>
);

export default NotFound;
