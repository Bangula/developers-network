const initialState = {
  isAuthenticated: false,
  user: {},
  error: {}
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: {}
      };
    case "LOGOUT_USER":
      localStorage.removeItem("access_token_name");
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };
    case "AUTH_ERRORS":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
