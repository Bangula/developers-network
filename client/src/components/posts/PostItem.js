import React from "react";
import Moment from "react-moment";
import Alert from "react-s-alert";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";

import {
  deletePost,
  likePost,
  unlikePost
} from "../../services/endpoints/posts";

const PostItem = ({ allPosts, getPosts, userId }) => {
  const handleDelete = async id => {
    const { data, error } = await deletePost(id);
    if (data) {
      console.log(data);
      getPosts();
    } else {
      console.log(error.response.data);
    }
  };
  const handleLike = async id => {
    const { data, error } = await likePost(id);
    if (data) {
      console.log(data);
      getPosts();
    } else {
      console.log(error.response.data.alreadyliked);
      Alert.error(error.response.data.alreadyliked);
    }
  };

  const handleUnlike = async id => {
    const { data, error } = await unlikePost(id);
    if (data) {
      console.log(data);
      getPosts();
    } else {
      console.log(error.response.data.notliked);
      Alert.error(error.response.data.notliked);
    }
  };
  const post =
    allPosts.length > 0
      ? allPosts.map(item => {
          let likes = item.likes.length > 0 ? item.likes.length : null;
          let comments = item.comments.length > 0 ? item.comments.length : null;
          return (
            <div
              key={item._id}
              className="border border-gray-400 my-4 md:flex p-8 content-center"
            >
              <div className="md:w-1/4 text-center ">
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
                <div className="" style={{ marginBottom: "10px" }}>
                  <p className="text-gray-600 text-lg ">{item.text}</p>
                </div>
                <div className="md:absolute bottom-0">
                  <p className="text-gray-600 text-sm my-2">
                    Posted on <Moment format="MM/DD/YYYY">{item.date}</Moment>
                  </p>
                  <div>
                    <button
                      onClick={() => handleLike(item._id)}
                      className="home-btn bg-gray-300 px-6 py-1 text-black opacity-75 rounded-sm mr-2"
                    >
                      <i className="fas fa-thumbs-up" />
                      <span className="px-1 font-semibold">{likes}</span>
                    </button>
                    <button
                      onClick={() => handleUnlike(item._id)}
                      className="home-btn bg-gray-300 px-6 py-1 text-black opacity-75 rounded-sm mr-2"
                    >
                      <i className="fas fa-thumbs-down" />
                    </button>
                    <Link
                      className="home-btn bg-teal-700 px-6 py-1 text-white opacity-75 rounded-sm mr-2  font-semibold"
                      to={`/post/${item._id}`}
                    >
                      Discussions
                      {comments ? (
                        <span className="px-1 text-black ml-2 rounded-lg font-semibold bg-white">
                          {comments}
                        </span>
                      ) : null}
                    </Link>
                    {userId === item.user ? (
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="home-btn bg-red-700 px-6 py-1 text-white opacity-75 rounded-sm font-semibold"
                      >
                        x
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      : null;
  return (
    <div className=" my-6">
      {post} <Alert />
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    userId: state.auth.user.id
  };
};

export default connect(mapStateToProps)(PostItem);
