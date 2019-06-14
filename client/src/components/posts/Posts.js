import React from "react";
import { getProfileByUserId } from "../../services/endpoints/profiles";
import { connect } from "react-redux";
import { createPost, getAllPosts } from "../../services/endpoints/posts";

// Components
import PostItem from "./PostItem";

const Posts = props => {
  const [postText, setPostText] = React.useState("");
  const [userData, setUserData] = React.useState({});
  const [postError, setPostError] = React.useState("");
  const [allPosts, setAllPosts] = React.useState([]);

  React.useEffect(() => {
    getUserData();
    getPosts();
  }, []);

  const handleChange = e => {
    setPostText(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let newPost = {};
    newPost = {
      text: postText,
      name: userData.name,
      avatar: userData.avatar,
      user: userData._id
    };

    const { data, error } = await createPost(newPost);
    if (data) {
      console.log(data);
      setPostText("");
      setPostError("");
      getPosts();
    } else {
      console.log(error.response.data);
      setPostError(error.response.data.text);
    }
  };
  async function getUserData() {
    const { data, error } = await getProfileByUserId(props.userId);
    if (data) {
      setUserData(data.data.user);
    } else {
      console.log(error);
    }
  }
  async function getPosts() {
    const { data, error } = await getAllPosts();
    if (data) {
      setAllPosts(data.data);
      console.log(data.data);
    } else {
      console.log(error.response.data);
    }
  }

  return (
    <div
      className=""
      style={{
        margin: "0 auto",
        marginTop: "8%",
        width: "100%",
        maxWidth: "960px"
      }}
    >
      <h1 className="text-teal-500 text-5xl font-medium my-2">Posts</h1>
      <p className=" text-3xl my-2 mb-8 text-gray-500">
        Welcome to the community!
      </p>
      <form onSubmit={handleSubmit}>
        <p className="text-center text text-red-500">{postError}</p>
        <p className="p-2 bg-teal-600 text-white font-semibold my-4">
          Say Something...
        </p>
        <textarea
          className="w-full border border-gray-400 p-2"
          name="userPost"
          cols="30"
          rows="5"
          value={postText}
          placeholder="Create post"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="home-btn bg-gray-800 p-4 py-1 text-white opacity-75 rounded-sm my-2"
        >
          Submit
        </button>
      </form>
      <p className="text-teal-600 italic mt-4">
        Posts (<span>{allPosts.length ? allPosts.length : "0"}</span>)
      </p>
      <PostItem allPosts={allPosts} getPosts={getPosts} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.auth.user.id
  };
};

export default connect(mapStateToProps)(Posts);
