import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { deleteUserAndProfile } from "../../services/endpoints/profiles";

// Components
import Experience from "./Experience";
import Education from "./Education";

const Profile = props => {
  let userProfile = props.profile.data;
  console.log(userProfile);

  const handleDeleteProfile = async () => {
    const { data, error } = await deleteUserAndProfile();
    if (data) {
      console.log(data);
      props.history.push("/");
    } else {
      console.log(error);
    }
  };

  return (
    <div style={{ marginTop: "100px" }} className="container">
      <h1 className="text-green-800 text-5xl font-semibold my-2">Dashboard</h1>
      <h2 className="font-semibold text-xl my-2 mb-8">
        Welcome {props.user.name}
      </h2>
      <div className="dashLinks">
        <Link
          className="home-btn bg-teal-500 p-4 py-2 text-white opacity-75 rounded-sm mr-2"
          to={{
            pathname: "/createprofile",
            state: { edit: true, data: userProfile }
          }}
        >
          Edit Profile
        </Link>
        <Link
          className="home-btn bg-teal-500 p-4 py-2 text-white opacity-75 rounded-sm mr-2"
          to="/addexperience"
        >
          Add Experience
        </Link>
        <Link
          className="home-btn bg-teal-500 p-4 py-2 text-white opacity-75 rounded-sm mr-2"
          to="/addeducation"
        >
          Add Education
        </Link>
      </div>

      <Experience
        userProfile={userProfile}
        history={props.history}
        getData={props.getData}
      />

      <Education
        userProfile={userProfile}
        history={props.history}
        getData={props.getData}
      />
      <button
        className="home-btn bg-red-400 p-4 py-2 text-white opacity-75 rounded-sm my-8"
        onClick={() => handleDeleteProfile()}
      >
        Delete My Account
      </button>
    </div>
  );
};

export default withRouter(Profile);
