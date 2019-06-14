import {
  signUp,
  signIn,
  getProfileByUserId
} from "../../services/endpoints/auth";
import jwt_decode from "jwt-decode";

export const registerUser = (user, history) => {
  return async dispatch => {
    const { data, error } = await signUp(user);
    if (data) {
      console.log(data);
      history.push("/login");
    } else if (error) {
      console.log(error.response.data);
    }
  };
};

export const loginUser = (user, history) => {
  return async dispatch => {
    const { data, error } = await signIn(user);
    if (data) {
      let token = data.data.token;
      let decoded = jwt_decode(token);

      dispatch({
        type: "SET_USER",
        payload: {
          name: decoded.name,
          id: decoded.id
        }
      });
      await localStorage.setItem("access_token_name", token);
      history.push("/dashboard");
    } else if (error) {
      console.log(error.response.data);
      dispatch({
        type: "AUTH_ERRORS",
        payload: error.response.data
      });
    }
  };
};

export const setUser = user => {
  return dispatch => {
    dispatch({
      type: "SET_USER",
      payload: {
        name: user.name,
        id: user.id
      }
    });
  };
};

export const logoutUser = history => {
  return dispatch => {
    dispatch({
      type: "LOGOUT_USER"
    });
    history.push("/");
  };
};
