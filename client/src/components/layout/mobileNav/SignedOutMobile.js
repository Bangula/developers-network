import React from "react";
import { Link } from "react-router-dom";

const SignedOutMobile = () => {
  return (
    <div className="">
      <Link
        to="/developers"
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 border-b py-3  border-teal-400"
      >
        DEVELOPERS
      </Link>
      <Link
        to="/register"
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 border-b py-3  border-teal-400"
      >
        REGISTER
      </Link>
      <Link
        to="/login"
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 border-b py-3  border-teal-400"
      >
        LOGIN
      </Link>
    </div>
  );
};

export default SignedOutMobile;
