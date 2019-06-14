import http from "../http/index";
import toResponse from "../../helpers/toResponse";

export const getAllPosts = () => {
  return toResponse(http.get("/api/posts"));
};

export const getPostById = id => {
  return toResponse(http.get(`/api/posts/${id}`));
};

export const createPost = post => {
  return toResponse(http.post("/api/posts", post));
};

export const deletePost = id => {
  return toResponse(http.delete(`/api/posts/${id}`));
};

export const likePost = id => {
  return toResponse(http.post(`/api/posts/like/${id}`));
};

export const unlikePost = id => {
  return toResponse(http.post(`/api/posts/unlike/${id}`));
};

export const addComment = (id, credentials) => {
  return toResponse(http.post(`/api/posts/comment/${id}`, credentials));
};

export const removeComment = (postId, commentId) => {
  return toResponse(http.delete(`/api/posts/comment/${postId}/${commentId}`));
};
