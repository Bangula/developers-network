import React from "react";
import { deleteExperience } from "../../services/endpoints/profiles";
import Moment from "react-moment";

const Experience = props => {
  const handleDelete = async id => {
    const { data, error } = await deleteExperience(id);
    if (data) {
      console.log(data);
      props.getData();
    } else if (error) {
      console.log(error.response.data);
    }
  };
  const experienceList = props.userProfile
    ? props.userProfile.experience.map(item => {
        return (
          <tr key={item._id}>
            <td>{item.company}</td>
            <td>{item.title}</td>
            <td>
              {item.from ? (
                <Moment format="DD-MM-YYYY">{item.from}</Moment>
              ) : (
                ""
              )}{" "}
              to{" "}
              {item.current ? (
                "Now"
              ) : (
                <Moment format="DD-MM-YYYY">{item.to}</Moment>
              )}
            </td>
            <td className="text-center">
              <button
                className="home-btn bg-red-400 p-4 py-1 text-white opacity-75 rounded-sm mr-2"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })
    : null;
  return (
    <div>
      <h1 className="text-green-800 text-2xl font-semibold my-8">
        Experience Credentials
      </h1>
      <table>
        <thead>
          <tr>
            <th className="text-green-700">Company</th>
            <th className="text-green-700">Title</th>
            <th className="text-green-700">Years</th>
            <th />
          </tr>
        </thead>

        <tbody>{experienceList}</tbody>
      </table>
    </div>
  );
};

export default Experience;
