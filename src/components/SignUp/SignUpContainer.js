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
    houseNumber: null,
    city: "",
    telephoneNumber: null,
    latitude: null,
    longitude: null
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("hello state", this.state);

    this.props.dispatch(
      signUp(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.firstName,
        this.state.lastName,
        this.state.streetName,
        this.state.houseNumber,
        this.state.city,
        this.state.telephoneNumber,
        this.state.latitude,
        this.state.longitude,
        this.props.history
      )
    );
    this.setState({
      username: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      streetName: "",
      houseNumber: null,
      city: "",
      telephoneNumber: null,
      latitude: null,
      longitude: null
    });
  };

  getLocation = () => {
    console.log("sign up click");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      alert("Geolocation is not supported");
    }
  };

  getCoordinates = position => {
    const { latitude, longitude } = position.coords;
    this.setState({ latitude, longitude });
  };

  render() {
    console.log(this.state);
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
          getLocation={this.getLocation}
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
