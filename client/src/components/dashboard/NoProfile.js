import React from "react";
import { Link } from "react-router-dom";

const NoProfile = props => {
  return (
    <div style={{ marginTop: "10%" }} className="container">
      <h1 className="text-green-800 text-5xl font-semibold my-2">Dashboard</h1>
      <h2 className="font-semibold text-xl my-2">Welcome {props.user.name}</h2>
      <p className="my-2 mb-4">
        You have not yet setup a profile, please add some info
      </p>
      <Link
        className="home-btn bg-teal-500 p-4 py-2 text-white  opacity-75 rounded-sm"
        to="/createprofile"
      >
        Create Profile
      </Link>
    </div>
  );
};

export default NoProfile;
