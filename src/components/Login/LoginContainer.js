import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { login } from "../../actions/user";

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(
      login(this.state.email, this.state.password, this.props.history)
    );

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        {this.props.userLoggedIn ? (
          <div>
            <h1>You are logged in</h1>
          </div>
        ) : (
          <div>
            <h2 className="login-title">Login</h2>
            <br />
            <LoginForm
              text="Login"
              values={this.state}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              user={this.props.user}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("log in form ", state);
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(LoginContainer);
