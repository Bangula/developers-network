import React from "react";
import mobileBg from "../../assets/mobile-bg.jpg";

import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div
      className="home-page w-screen h-screen pt-32 md:pt-64 md:bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${mobileBg})`
      }}
    >
      <h2 className="text-white text-center text-3xl md:text-6xl font-semibold">
        Welcome to DevConnect
      </h2>
      <h3 className="text-white text-center text-xl md:text-2xl">
        Social Network For Web Developers
      </h3>
      <div className="mt-16 md:mt-20 w-screen text-center">
        <Link
          className="home-btn bg-teal-500 p-4 py-2 text-white mr-2 md:opacity-75 rounded"
          to="/register"
        >
          Sign Up
        </Link>
        <Link
          className="home-btn bg-gray-100 p-4 py-2 text-gray-700 md:opacity-75 rounded"
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
