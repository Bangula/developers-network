import React, { useEffect, useState } from "react";

import { getAllProfiles } from "../../services/endpoints/profiles";

// Components
import DevItem from "./DevItem";

const Developers = props => {
  const [devData, setDevData] = useState([]);

  useEffect(() => {
    getDevs();
  }, []);

  async function getDevs() {
    const { data, error } = await getAllProfiles();
    if (data) {
      console.log(data.data);
      setDevData(data.data);
    } else {
      console.log(error);
    }
  }
  const devList = devData.length
    ? devData.map(item => {
        return <DevItem key={item._id} data={item} />;
      })
    : null;
  return (
    <div
      className=" px-4"
      style={{
        marginTop: "8%",
        width: "100%",
        maxWidth: "960px"
      }}
    >
      <h1 className="text-teal-500 mt-32 text-5xl font-medium my-2">
        Developers
      </h1>
      <h2 className="text-3xl my-2 mb-8 text-gray-500">
        Browse and connect with developers
      </h2>
      <div className="developersList mt-32" style={{ marginTop: "80px" }}>
        {devList}
      </div>
    </div>
  );
};

export default Developers;
