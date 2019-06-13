import React from "react";
import { Link } from "react-router-dom";

const DevItem = ({ data }) => {
  const skills = data.skills.map((item, index) => {
    return (
      <li className="text-teal-500 my-2" key={index}>
        <i className="fas fa-check mr-2" />
        {item.toUpperCase()}
      </li>
    );
  });
  return (
    <div
      className="developerInfo w-full rounded-sm bg-gray-100	flex justify-between flex-wrap p-8 mb-4 shadow-md hover:shadow-lg"
      style={{ transition: "all 0.2s" }}
    >
      <div className="w-1/4 border rounded-full overflow-hidden" style={{}}>
        <img className="w-full" src={data.user.avatar} alt="user avatar" />
      </div>
      <div className="w-2/4 px-8 self-center">
        <h1 className="text-2xl my-2">{data.user.name}</h1>
        <p className="my-2 font-light">
          {data.status}
          {data.company ? ` at ${data.company}` : null}
        </p>
        <p className="my-2 font-light">{data.location}</p>
        <Link
          className="home-btn bg-teal-500 p-4 py-1 text-white opacity-75 rounded-sm my-2"
          to={`/fullprofile/${data.user._id}`}
        >
          View Profile
        </Link>
      </div>
      <div className="w-1/4 px-4 self-center">
        <ul>{skills}</ul>
      </div>
    </div>
  );
};

export default DevItem;
