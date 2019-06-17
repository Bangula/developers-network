import React from "react";
import { Link } from "react-router-dom";

const SignedOutMobile = ({ setToggle, ...props }) => {
  return (
    <div className="">
      <Link
        to="/developers"
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 border-b py-3  border-teal-400"
        onClick={setToggle}
      >
        DEVELOPERS
      </Link>
      <Link
        to="/register"
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 border-b py-3  border-teal-400"
        onClick={setToggle}
      >
        REGISTER
      </Link>
      <Link
        to="/login"
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 border-b py-3  border-teal-400"
        onClick={setToggle}
      >
        LOGIN
      </Link>
    </div>
  );
};

export default SignedOutMobile;
