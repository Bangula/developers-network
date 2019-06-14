import React, { useEffect, useState } from "react";
import { getProfileByUserId } from "../../services/endpoints/profiles";

// Comnponents
import Header from "./components/Header";
import BioSkills from "./components/BioSkills";
import ExpEdu from "./components/ExpEdu";
import Github from "./components/Github";

const FullProfile = props => {
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    getData();
  }, []);
  console.log(props);
  async function getData() {
    const { data, error } = await getProfileByUserId(props.match.params.id);
    if (data) {
      console.log(data);
      setProfileData(data.data);
    } else {
      console.log(error);
    }
  }
  console.log(profileData);

  return (
    <div
      style={{
        margin: "0 auto",
        marginTop: "8%",
        width: "100%",
        maxWidth: "960px"
      }}
    >
      <button
        className="home-btn bg-teal-500 p-4 py-2 text-white  rounded-sm my-2"
        style={{ zIndex: 0 }}
        onClick={() => props.history.goBack()}
      >
        Back to Profiles
      </button>

      <Header profileData={profileData} />
      <BioSkills profileData={profileData} />
      <ExpEdu profileData={profileData} />
      {profileData.githubusername ? (
        <Github githubusername={profileData.githubusername} />
      ) : null}
    </div>
  );
};

export default FullProfile;
