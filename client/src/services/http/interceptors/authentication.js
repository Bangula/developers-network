// import store from "../../../store/index";

export function authRequest(config) {
  const token = localStorage.getItem("access_token_name");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}

export const authResponse = [
  function(response) {
    return response;
  },
  function(error) {
    if (error) {
      // store.dispatch({ type: "LOGOUT_USER" });
      // localStorage.removeItem("access_token_name");
    }
    return Promise.reject(error);
  }
];
