import http from "../http/index";
import toResponse from "../../helpers/toResponse";

export const signUp = user => {
  return toResponse(http.post("/api/users/register", user));
};

export const signIn = user => {
  return toResponse(http.post("/api/users/login", user));
};
