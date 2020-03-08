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
import ItemContainer from "./components/Item/ItemContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ImageUploadContainer from "./components/ImageUpload/ImageUploadContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUpContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/items" component={ItemContainer} />
          <Route exact path="/" component={ItemListContainer} />
          <Route
            exact
            path="/items/:itemId/images"
            component={ImageUploadContainer}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
