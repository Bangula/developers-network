import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

import MobileNav from "./mobileNav/MobileNav";

const Navbar = ({ isAuthenticated, ...props }) => {
  const [toggleMobileMenu, setToggleMobileMenu] = React.useState(false);
  const setToggle = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full top-0 z-50">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/" className="font-semibold text-xl tracking-tight">
            DevConnect
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={setToggle}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full hidden lg:block flex-grow lg:flex lg:w-auto">
          <div className="text-sm lg:flex-grow flex justify-end">
            {isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />}
          </div>
        </div>
      </nav>
      <MobileNav
        isAuthenticated={isAuthenticated}
        menuIsActive={toggleMobileMenu}
        setToggle={setToggle}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(Navbar);
