import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import LoginContainer from "./components/Login/LoginContainer";
import ItemContainer from "./components/Item/ItemContainer";
import HomePage from "./components/Home/HomePage";
import ImageUploadContainer from "./components/ImageUpload/ImageUploadContainer";
import ItemDetailsContainer from "./components/ItemDetails/ItemDetailsContainer";
import Navigation from "./components/Home/Navigation";

class App extends Component {
  protectedRoute = (Component, routerProps) => {
    const { token } = this.props.user;
    return token ? <Component {...routerProps} /> : <Redirect to="/login" />;
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/signup" component={SignUpContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route
              exact
              path="/items"
              render={routerProps =>
                this.protectedRoute(ItemContainer, routerProps)
              }
            />
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/items/:itemId/images"
              component={ImageUploadContainer}
            />
            <Route
              exact
              path="/items/:itemId"
              component={ItemDetailsContainer}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);
