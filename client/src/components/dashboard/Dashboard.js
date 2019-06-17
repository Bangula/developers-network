import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { currentUserProfile } from "../../services/endpoints/profiles";

// Components
import NoProfile from "./NoProfile";
import Profile from "./Profile";

const Dashboard = props => {
  const [userProfile, setUserProfile] = useState({});
  const [responseError, setResponseError] = useState();

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const { data, error } = await currentUserProfile();
    if (data) {
      setUserProfile(data);
      console.log("bane", data);
    } else if (error) {
      setResponseError(error.response.data);
    }
  }
  return (
    <div className="px-2">
      {responseError ? (
        <NoProfile user={props.user} />
      ) : (
        <Profile user={props.user} profile={userProfile} getData={getData} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    id: state.auth.id
  };
};

export default connect(mapStateToProps)(Dashboard);
