import React from "react";

const initialState = {
  profile: {},
  profiles: [],
  errors: {}
};

const ProfilesContext = React.createContext();

const ProfilesProvider = props => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_PROFILE":
        console.log(action.payload);
        return {
          ...state,
          profile: action.payload
        };
      case "SET_PROFILES":
        return {
          ...state,
          profile: action.payload
        };
      case "SET_ERROR":
        return {
          ...state,
          errors: action.payload
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <ProfilesContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ProfilesContext.Provider>
  );
};

export { ProfilesContext, ProfilesProvider };
