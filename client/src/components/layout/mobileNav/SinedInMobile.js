import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "../../../store/actions/authActions";

const SinedInMobile = ({ setToggle, ...props }) => {
  const handleLogout = () => {
    props.logoutUser(props.history);
    setToggle();
  };
  return (
    <div>
      <Link
        to="/developers"
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 border-b py-3  border-teal-400"
        onClick={setToggle}
      >
        Developers
      </Link>
      <Link
        to="/posts"
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 border-b py-3  border-teal-400"
        onClick={setToggle}
      >
        Posts
      </Link>
      <Link
        to="/dashboard"
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 border-b py-3  border-teal-400"
        onClick={setToggle}
      >
        Dashboard
      </Link>

      <button
        style={{ cursor: "pointer" }}
        onClick={handleLogout}
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 py-3 border-b text-left border-teal-400 w-full"
      >
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userName: state.auth.user.name
  };
};

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(SinedInMobile));
