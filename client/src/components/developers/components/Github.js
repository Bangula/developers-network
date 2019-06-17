import React, { useEffect, useState } from "react";
import axios from "axios";

const Github = ({ githubusername }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let url = `https://api.github.com/users/${githubusername}/repos?type=owner`;
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(console.log);
  }, []);
  const reposList = data.length
    ? data.map((item, index) => {
        return (
          <div key={index} className="border shadow-md w-full p-4 md:flex my-3">
            <div className="md:w-10/12 ">
              <a
                className="text-teal-500 text-lg hover:text-teal-800 my-2"
                href={item.clone_url}
                target="_blank"
              >
                {item.name}
              </a>
              <p>
                {item.description
                  ? item.description
                  : "No description available"}
              </p>
            </div>
            <div className="w-4/12 md:w-2/12 ">
              <p className="bg-teal-600 text-white px-1 my-1">
                Stars: {item.stargazers_count}{" "}
              </p>
              <p className="bg-gray-800 text-white px-1 my-1">
                Watchers: {item.watchers}
              </p>
              <p className="bg-gray-100 text-gray-600 px-1 my-1">
                Forks: {item.forks}
              </p>
            </div>
          </div>
        );
      })
    : null;
  return (
    <div>
      <h1 className="text-teal-500 text-2xl my-8">
        <i className="fab fa-github mr-2" />
        Github Repos
      </h1>
      {reposList}
    </div>
  );
};

export default Github;
