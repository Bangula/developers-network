import React from "react";
import { Link } from "react-router-dom";

// Components
import SignedOutMobile from "./SignedOutMobile";
import SignedInMobile from "./SinedInMobile";

const MobileNav = ({ isAuthenticated, menuIsActive, setToggle }) => {
  let menuPosition;
  if (menuIsActive) {
    menuPosition = "0px";
  } else {
    menuPosition = "-100%";
  }

  return (
    <div
      className="h-screen lg:hidden bg-gray-800 fixed z-50 p-4 top-0  w-2/3 sm:w-1/2 md:w-1/3"
      style={{ transition: "all 0.5s", left: menuPosition }}
    >
      <Link to="/" className="font-semibold text-xl tracking-tight text-white">
        DevConnect
      </Link>
      <div style={{ marginTop: "5vh" }}>
        {isAuthenticated ? (
          <SignedInMobile setToggle={setToggle} />
        ) : (
          <SignedOutMobile setToggle={setToggle} />
        )}
      </div>
    </div>
  );
};

export default MobileNav;
