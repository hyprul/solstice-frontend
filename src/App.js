import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home";
import Billing from "./Components/Billing";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/bill" component={Billing} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
