import React from "react";

const BioSkills = ({ profileData }) => {
  const skillList = profileData.user
    ? profileData.skills.map((item, index) => {
        return (
          <span key={index}>
            {item !== " " ? (
              <span className="ml-4 font-light text-teal-600">
                <i className="fas fa-check mr-1" />
                {item.toUpperCase()}
              </span>
            ) : null}
          </span>
        );
      })
    : null;
  return (
    <div className="bioSkills border my-3 px-8 bg-gray-100">
      <div className="border-b text-center py-8">
        <p className="text-3xl text-teal-500 mb-4">
          {profileData.user && profileData.user.name}'s Bio
        </p>
        <p className="text-gray-600">{profileData.user && profileData.bio}</p>
      </div>
      <div className=" text-center py-8">
        <p className="text-3xl text-teal-500 mb-4 ">Skill Set</p>
        <div className="text-center">{skillList}</div>
      </div>
    </div>
  );
};

export default BioSkills;
