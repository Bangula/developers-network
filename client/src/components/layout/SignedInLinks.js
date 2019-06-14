import React from "react";
import { Link, withRouter } from "react-router-dom";
import { logoutUser } from "../../store/actions/authActions";
import { connect } from "react-redux";

const SignedInLinks = props => {
  return (
    <>
      <Link
        to="/developers"
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4"
      >
        Developers
      </Link>
      <Link
        to="/posts"
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4"
      >
        Posts
      </Link>
      <Link
        to="/dashboard"
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200  mr-4"
      >
        Dashboard
      </Link>
      {props.userName !== "" ? (
        <span className="block mt-4 lg:inline-block lg:mt-0 text-green-500 ml-4 mr-4">
          Hello, {props.userName}
        </span>
      ) : null}

      <button
        style={{ cursor: "pointer" }}
        onClick={() => props.logoutUser(props.history)}
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200"
      >
        Logout
      </button>
    </>
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
)(withRouter(SignedInLinks));
