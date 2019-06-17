import React from "react";
import { Link } from "react-router-dom";

const DevItem = ({ data }) => {
  const skills = data.skills.map((item, index) => {
    return (
      <li key={index}>
        {item !== " " ? (
          <span className="text-teal-500 my-2">
            <i className="fas fa-check mr-2" />
            {item.toUpperCase()}
          </span>
        ) : null}
      </li>
    );
  });
  return (
    <div
      className="developerInfo w-full rounded-sm bg-gray-100	md:flex justify-between flex-wrap p-1 py-2 md:p-8 mb-4 shadow-md hover:shadow-lg"
      style={{ transition: "all 0.2s" }}
    >
      <div
        className="w-full md:w-1/4  overflow-hidden h-56 text-center   self-center"
        style={{}}
      >
        <img
          className="w-42 md:w-full h-full rounded-full"
          src={data.user ? data.user.avatar : null}
          alt="user avatar"
          style={{ margin: "0 auto" }}
        />
      </div>
      <div className="text-center md:text-left md:w-2/4 px-8 self-center">
        <h1 className="text-2xl my-2">{data.user ? data.user.name : null}</h1>
        <p className="my-2 font-light">
          {data.status}
          {data.company ? ` at ${data.user ? data.company : null}` : null}
        </p>
        <p className="my-2 font-light">{data.user ? data.location : null}</p>
        <Link
          className="home-btn bg-teal-500 p-4 py-1 text-white opacity-75 rounded-sm my-2"
          to={`/fullprofile/${data.user ? data.user._id : null}`}
        >
          View Profile
        </Link>
      </div>
      <div className="text-center md:text-left mt-4 mt-0 md:w-1/4 px-4 self-center">
        <ul>{skills}</ul>
      </div>
    </div>
  );
};

export default DevItem;
