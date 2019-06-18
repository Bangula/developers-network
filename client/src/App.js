import React from "react";
import "./App.css";
import jwt_decode from "jwt-decode";
import store from "./store/index";
import { setUser } from "./store/actions/authActions";

import { BrowserRouter } from "react-router-dom";

// Components
import Pages from "./components/pages";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

if (localStorage.access_token_name) {
  //Decode token and get user info
  const decoded = jwt_decode(localStorage.access_token_name);

  //Set user and isAuthenticated
  store.dispatch(setUser({ name: decoded.name, id: decoded.id }));
}

function App() {
  return (
    <BrowserRouter>
      <div className="App pb-32 relative">
        <Navbar />
        <Pages />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
