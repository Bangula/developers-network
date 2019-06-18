import React from "react";
import {
  getPostById,
  addComment,
  removeComment
} from "../../services/endpoints/posts";
import { connect } from "react-redux";

import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";

// Components
import Comments from "./Comments";

const Post = ({ userId, ...props }) => {
  const [commentText, setCommentText] = React.useState("");
  const [commentError, setCommentError] = React.useState("");
  const [postData, setPostData] = React.useState({});

  React.useEffect(() => {
    getData(props.match.params.id);
  }, [props.match.params.id]);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(commentText);
    let newComment = {
      avatar: postData.avatar,
      name: postData.name,
      text: commentText
    };
    const { data, error } = await addComment(postData._id, newComment);
    if (data) {
      console.log(data);
      setCommentError("");
      setCommentText("");
      getData(props.match.params.id);
    } else {
      console.log(error.response.data);
      setCommentError(error.response.data.text);
    }
  };

  async function getData(id) {
    const { data, error } = await getPostById(id);
    if (data) {
      console.log(data);
      setPostData(data.data);
    } else {
      console.log(error);
    }
  }

  const deleteComment = async id => {
    const { data, error } = await removeComment(postData._id, id);
    if (data) {
      console.log("Comment removed", data);
      getData(props.match.params.id);
    } else {
      console.log(error.response);
    }
  };
  return (
    <div
      className="px-2"
      style={{
        margin: "0 auto",
        width: "100%",
        maxWidth: "960px"
      }}
    >
      <button
        className="home-btn mt-32 bg-gray-200 p-4 py-1 text-black rounded-sm my-2"
        onClick={() => props.history.push("/posts")}
      >
        Back to posts
      </button>

      <div className="border border-gray-200 shadow-lg my-4 md:flex p-4 content-center">
        <div className="md:w-1/4 text-center ">
          <img
            className="w-1/2 rounded-full"
            style={{
              margin: "0 auto"
            }}
            src={postData.avatar}
            alt="user avatar"
          />
          <p className="text-xl text-teal-500 my-2">{postData.name}</p>
        </div>
        <div className="md:w-3/4  flex">
          <p className="text-gray-600 text-lg self-center">{postData.text}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <p className="text-center text text-red-500">{commentError}</p>
        <p className="p-2 bg-teal-600 text-white font-semibold my-4">
          Leave A Comment
        </p>
        <textarea
          className="w-full border border-gray-400 p-2"
          name="userPost"
          cols="30"
          rows="5"
          value={commentText}
          placeholder="Comment this post"
          onChange={e => setCommentText(e.target.value)}
        />
        <button
          type="submit"
          className="home-btn bg-gray-800 p-4 py-1 text-white opacity-75 rounded-sm my-2"
        >
          Submit
        </button>
      </form>
      <div className="comments">
        <Comments
          comments={postData.comments ? postData.comments : []}
          userId={userId}
          getData={getData}
          deleteComment={deleteComment}
        />
      </div>
      <Alert />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.auth.user.id
  };
};

export default connect(mapStateToProps)(Post);
