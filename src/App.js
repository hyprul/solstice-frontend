import React, { Component } from "react";
import "./App.css";

import Home from "./Components/Home";
import Billing from "./Components/Billing";
import { BrowserRouter, Route } from "react-router-dom";
import AppBar from './Components/AppBar'

import Background from "./backgroundImages/solstice.jpg";

var backgroundStyle = {
  width: "100%",
  height: "100vh",
  backgroundSize: "cover",

  backgroundImage: `url(${Background})`
};

class App extends Component {
  render() {
    return (
      <div style={backgroundStyle}>
        <BrowserRouter>
          <React.Fragment>
            <AppBar/>
            <Route exact path="/" component={Home} />
            <Route exact path="/bill" component={Billing} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
