import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { signUp } from "../../actions/user";

class SignupFormContainer extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    streetName: "",
    houseNumber: 0,
    city: "",
    telephoneNumber: 0
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.dispatch(
      signUp(
        this.state.username,
        this.state.email,
        this.state.password,
        this.props.history
      )
    );
    this.setState({
      username: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        {this.props.user.userCreated ? <h1>Account created</h1> : null}
        <h2 className="signup-title">Sign Up</h2>
        <br />
        <SignUpForm
          text={"Signup"}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("STATE IN MSTP", state);
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(SignupFormContainer);
