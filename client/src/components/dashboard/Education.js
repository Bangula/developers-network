import React from "react";
import { deleteEducation } from "../../services/endpoints/profiles";
import Moment from "react-moment";

const Education = props => {
  const handleDelete = async id => {
    const { data, error } = await deleteEducation(id);
    if (data) {
      console.log(data);
      props.getData();
    } else if (error) {
      console.log(error.response.data);
    }
  };

  const educationList = props.userProfile
    ? props.userProfile.education.map(item => {
        return (
          <tr key={item._id}>
            <td>{item.school}</td>
            <td>{item.degree}</td>
            <td>
              {item.from ? (
                <Moment format="DD-MM-YYYY">{item.from}</Moment>
              ) : (
                ""
              )}{" "}
              to {item.to ? <Moment format="DD-MM-YYYY">{item.to}</Moment> : ""}
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
        Education Credentials
      </h1>
      <table>
        <thead>
          <tr>
            <th className="text-green-700">School</th>
            <th className="text-green-700">Degree</th>
            <th className="text-green-700">Years</th>
            <th />
          </tr>
        </thead>

        <tbody>{educationList}</tbody>
      </table>
    </div>
  );
};

export default Education;
