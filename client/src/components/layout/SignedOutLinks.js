import React from "react";
import { Link } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <>
      <Link
        to="/"
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4"
      >
        Developers
      </Link>
      <Link
        to="/register"
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4"
      >
        Register
      </Link>
      <Link
        to="/login"
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200"
      >
        Login
      </Link>
    </>
  );
};

export default SignedOutLinks;
