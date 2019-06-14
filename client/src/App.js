import React from "react";
import "./App.css";
import jwt_decode from "jwt-decode";
import store from "./store/index";
import { setUser } from "./store/actions/authActions";

import { BrowserRouter, Route } from "react-router-dom";

import { ProfilesProvider } from "./context/ProfilesProvider";

//Components
import Home from "./components/home/Home";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Developers from "./components/developers/Developers";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/dashboard/CreateProfile";
import AddExperience from "./components/dashboard/AddExperience";
import AddEducation from "./components/dashboard/AddEducation";
import FullProfile from "./components/developers/FullProfile";
import Posts from "./components/posts/Posts";
import Post from "./components/posts/Post";

if (localStorage.access_token_name) {
  //Decode token and get user info
  const decoded = jwt_decode(localStorage.access_token_name);

  //Set user and isAuthenticated
  store.dispatch(setUser({ name: decoded.name, id: decoded.id }));
}

function App() {
  return (
    <BrowserRouter>
      <div className="App pb-32">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <ProfilesProvider>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/createprofile" component={CreateProfile} />
          <Route path="/addexperience" component={AddExperience} />
          <Route path="/addeducation" component={AddEducation} />
        </ProfilesProvider>
        <Route path="/developers" component={Developers} />
        <Route path="/fullprofile/:id" component={FullProfile} />
        <Route path="/posts" component={Posts} />
        <Route path="/post/:id" component={Post} />
      </div>
    </BrowserRouter>
  );
}

export default App;
