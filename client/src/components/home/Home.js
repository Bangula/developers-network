import React from "react";
import bgImage from "../../assets/office-background1.jpg";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="home-page w-screen h-screen pt-56 bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="text-white text-center text-6xl font-semibold">
        Welcome to DevConnect
      </h2>
      <h3 className="text-teal-800 text-center text-2xl">
        Social Network For Web Developers
      </h3>
      <div className="mt-20 w-screen text-center">
        <Link
          className="home-btn bg-teal-500 p-4 py-2 text-white mr-2 opacity-75 rounded-sm"
          to="/register"
        >
          Sign Up
        </Link>
        <Link
          className="home-btn bg-teal-500 p-4 py-2 text-white opacity-75 rounded-sm"
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
