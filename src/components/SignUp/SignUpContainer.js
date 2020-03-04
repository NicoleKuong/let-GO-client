import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { signUp } from "../../actions/user";

class SignupFormContainer extends Component {
  state = {
    username: "",
    email: "",
    password: ""
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
