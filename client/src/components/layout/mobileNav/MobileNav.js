import React from "react";
import { Link } from "react-router-dom";

// Components
import SignedOutMobile from "./SignedOutMobile";
import SignedInMobile from "./SinedInMobile";

const MobileNav = ({ isAuthenticated }) => {
  return (
    <div className="h-screen w-2/3 sm:w-1/2 md:w-1/3 lg:hidden bg-gray-800 fixed z-50 p-4 top-0">
      <Link to="/" className="font-semibold text-xl tracking-tight text-white">
        DevConnect
      </Link>
      <div style={{ marginTop: "5vh" }}>
        {isAuthenticated ? <SignedInMobile /> : <SignedOutMobile />}
      </div>
    </div>
  );
};

export default MobileNav;
