import React from "react";

const Header = ({ profileData }) => {
  let globe, twitter, facebook, linkedin, youtube, instagram;
  globe = profileData.website ? (
    <a
      href={profileData.website}
      className="text-white text-3xl mx-2 hover:text-black"
      target="_blank"
    >
      <i className="fas fa-globe" />
    </a>
  ) : null;
  if (profileData.social) {
    twitter = profileData.social.twitter ? (
      <a
        href={profileData.social.twitter}
        className="text-white text-3xl mx-2 hover:text-black"
        target="_blank"
      >
        <i className="fab fa-twitter" />
      </a>
    ) : null;
    facebook = profileData.social.facebook ? (
      <a
        href={profileData.social.facebook}
        className="text-white text-3xl mx-2 hover:text-black"
        target="_blank"
      >
        <i className="fab fa-facebook-square" />
      </a>
    ) : null;
    linkedin = profileData.social.linkedin ? (
      <a
        href={profileData.social.linkedin}
        className="text-white text-3xl mx-2 hover:text-black"
        target="_blank"
      >
        <i className="fab fa-linkedin" />
      </a>
    ) : null;
    youtube = profileData.social.youtube ? (
      <a
        href={profileData.social.youtube}
        className="text-white text-3xl mx-2 hover:text-black"
        target="_blank"
      >
        <i className="fab fa-youtube" />
      </a>
    ) : null;
    instagram = profileData.social.instagram ? (
      <a
        href={profileData.social.instagram}
        className="text-white text-3xl mx-2 hover:text-black"
        target="_blank"
      >
        <i className="fab fa-instagram" />
      </a>
    ) : null;
  }
  return (
    <div className="profileHeader w-full py-16 bg-teal-600 text-center">
      <div className=" overflow-hidden w-1/4" style={{ margin: "0 auto" }}>
        <img
          className="rounded-full w-full"
          src={profileData.user && profileData.user.avatar}
          alt="user avatar"
        />
      </div>
      <div>
        <h1 className="my-4 text-5xl font-semibold text-white">
          {profileData.user && profileData.user.name}
        </h1>
        <p className="my-4 text-3xl  text-white">
          {profileData.user && profileData.status}
          {profileData.company ? ` at ${profileData.company}` : null}
        </p>
        <p className="my-4 text-xl font-light text-white">
          {profileData.user && profileData.location}
        </p>
        <div className="">
          {globe}
          {twitter}
          {facebook}
          {linkedin}
          {youtube}
          {instagram}
        </div>
      </div>
    </div>
  );
};

export default Header;
