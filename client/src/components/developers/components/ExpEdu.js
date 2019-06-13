import React from "react";
import Moment from "react-moment";

const ExpEdu = ({ profileData }) => {
  let educationList = <p className="text-gray-600 my-2">No data</p>;
  let experienceList = <p className="text-gray-600 my-2">No data</p>;
  if (profileData.user) {
    if (profileData.education.length) {
      educationList = profileData.education.map(item => {
        return (
          <div key={item._id} className="border-b py-4">
            <p className="font-bold text-lg text-gray-600 my-2">
              {item.school}
            </p>
            <p className="text-gray-600 my-2">
              {console.log(item.from)}
              <Moment format="MMMMYYYY">{item.from}</Moment>
              {" to "}
              {item.to ? <Moment format="MMMMYYYY">{item.to}</Moment> : "-"}
            </p>
            <p className="text-gray-600 my-2">
              <span className="font-semibold">Degree: </span>
              {item.degree}
            </p>
            <p className="text-gray-600 my-2">
              <span className="font-semibold">Field of study: </span>
              {item.fieldofstudy}
            </p>
            <p className="text-gray-600 my-2">
              <span className="font-semibold">Description: </span>
              {item.description}
            </p>
          </div>
        );
      });
    }
  }
  if (profileData.user) {
    if (profileData.experience.length) {
      experienceList = profileData.experience.map(item => {
        return (
          <div key={item._id} className="border-b py-4">
            <p className="font-bold text-lg text-gray-600 my-2">
              {item.company}
            </p>
            <p className="text-gray-600 my-2">
              <Moment format="MMMMYYYY">{item.from}</Moment>
              {" to "}
              {item.to ? <Moment format="MMMMYYYY">{item.to}</Moment> : "-"}
            </p>
            <p className="text-gray-600 my-2">
              <span className="font-semibold">Position: </span>
              {item.title}
            </p>

            <p className="text-gray-600 my-2">
              <span className="font-semibold">Description: </span>
              {item.description}
            </p>
          </div>
        );
      });
    }
  }

  return (
    <div className="expEdu lg:flex border my-3 flex-wrap justify-between">
      <div className="experience border p-8" style={{ width: "49.5%" }}>
        <p className="text-3xl text-teal-500 mb-4 ">Experience</p>
        {experienceList}
      </div>
      <div className="education border p-8" style={{ width: "49.5%" }}>
        <p className="text-3xl text-teal-500 mb-4 ">Education</p>
        {educationList}
      </div>
    </div>
  );
};

export default ExpEdu;
