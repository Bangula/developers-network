import React from "react";
import Moment from "react-moment";

const Comments = ({ getData, comments, userId, deleteComment }) => {
  const commentList =
    comments.length > 0
      ? comments.map(item => {
          return (
            <div
              key={item._id}
              className="border-b border-gray-400 my-4 md:flex p-4 shadow content-center"
            >
              <div className="md:w-1/4 text-center">
                <img
                  className="w-1/2 rounded-full"
                  style={{
                    margin: "0 auto"
                  }}
                  src={item.avatar}
                  alt="user avatar"
                />
                <p className="text-xl text-teal-500 my-2">{item.name}</p>
              </div>
              <div className="md:w-3/4 relative">
                <p className="text-gray-600 text-lg">{item.text}</p>
                <div className="md:absolute bottom-0">
                  <p className="text-gray-600 text-sm my-2">
                    Posted on <Moment format="MM/DD/YYYY">{item.date}</Moment>
                    {userId === item.user ? (
                      <button
                        onClick={() => deleteComment(item._id)}
                        className="home-btn bg-red-700 px-6 py-1 text-white opacity-75 rounded-sm font-semibold ml-4 mb-1"
                      >
                        x
                      </button>
                    ) : null}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      : null;
  return (
    <div>
      <p className="text-teal-600 italic mt-4">
        Comments (<span>{comments.length ? comments.length : "0"}</span>)
      </p>
      {commentList}
    </div>
  );
};

export default Comments;
