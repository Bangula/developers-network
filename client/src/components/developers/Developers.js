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
      style={{
        margin: "0 auto",
        marginTop: "8%",
        width: "100%",
        maxWidth: "960px"
      }}
    >
      <h1 className="text-green-800 text-3xl font-medium my-2">Developers</h1>
      <h2 className="font-semibold text-lg my-2 mb-8">
        Browse and connect with developers
      </h2>
      <div className="developersList mt-32" style={{ marginTop: "80px" }}>
        {devList}
      </div>
    </div>
  );
};

export default Developers;
