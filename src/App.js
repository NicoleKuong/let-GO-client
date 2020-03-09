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
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ImageUploadContainer from "./components/ImageUpload/ImageUploadContainer";
import ItemDetailsContainer from "./components/ItemDetails/ItemDetailsContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/login">
              Log In
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/items">
              Make an offer
            </Nav.Link>
          </Nav.Item>
        </Nav>
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
          <Route exact path="/items/:itemId" component={ItemDetailsContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
