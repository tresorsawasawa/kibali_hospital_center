import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const NotFound = () => {
  const error = useRouteError();

  return (
    <section className="notFoundContainer flex justify-center items-center flex-col">
      <Link
        to="/"
        className="back-to-home"
      >
        <BsArrowLeft />
        <span>Click this to go Back To the Homepage</span>
      </Link>

      <div className="text-container">
        <h3>{error.statusText || error.message}</h3>
        {/* <h3>The page you opened doesn&apos;t exist.</h3> */}
      </div>
    </section>
  );
};

export default NotFound;
