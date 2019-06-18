import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

// Components
import Home from "../home/Home";
import Dashboard from "../dashboard/Dashboard";
import CreateProfile from "../dashboard/CreateProfile";
import AddExperience from "../dashboard/AddExperience";
import AddEducation from "../dashboard/AddEducation";
import Posts from "../posts/Posts";
import Post from "../posts/Post";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Developers from "../developers/Developers";
import FullProfile from "../developers/FullProfile";

const index = ({ isAuthenticated }) => {
  return (
    <div>
      {isAuthenticated && (
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/createprofile" component={CreateProfile} />
          <Route path="/addexperience" component={AddExperience} />
          <Route path="/addeducation" component={AddEducation} />
          <Route path="/posts" component={Posts} />
          <Route path="/post/:id" component={Post} />
        </Switch>
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/developers" component={Developers} />
        <Route path="/fullprofile/:id" component={FullProfile} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(index);
