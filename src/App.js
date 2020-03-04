import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import LoginContainer from "./components/Login/LoginContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUpContainer} />
          <Route exact path="/login" component={LoginContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
