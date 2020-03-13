import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import LoginContainer from "./components/Login/LoginContainer";
import ItemContainer from "./components/Item/ItemContainer";
import HomePage from "./components/Home/HomePage";
import ImageUploadContainer from "./components/ImageUpload/ImageUploadContainer";
import ItemDetailsContainer from "./components/ItemDetails/ItemDetailsContainer";
import Navigation from "./components/Home/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/signup" component={SignUpContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/items" component={ItemContainer} />
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/items/:itemId/images"
            component={ImageUploadContainer}
          />
          <Route exact path="/items/:itemId" component={ItemDetailsContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
