import http from "../http/index";
import toResponse from "../../helpers/toResponse";

export const currentUserProfile = () => {
  return toResponse(http.get("/api/profile/"));
};

export const getProfileByUserId = id => {
  return toResponse(http.get(`/api/profile/user/${id}`));
};

export const getAllProfiles = () => {
  return toResponse(http.get("/api/profile/all"));
};

export const createProfile = credentials => {
  return toResponse(http.post("/api/profile", credentials));
};

export const addExperience = credentials => {
  return toResponse(http.post("/api/profile/experience", credentials));
};

export const addEducation = credentials => {
  return toResponse(http.post("/api/profile/education", credentials));
};

export const deleteExperience = id => {
  return toResponse(http.delete(`/api/profile/experience/${id}`));
};

export const deleteEducation = id => {
  return toResponse(http.delete(`/api/profile/education/${id}`));
};

export const deleteUserAndProfile = () => {
  return toResponse(http.delete("/api/profile"));
};
