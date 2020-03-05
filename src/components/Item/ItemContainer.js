import React, { Component } from "react";
import ItemForm from "./ItemForm";
import { connect } from "react-redux";

import "./ItemForm.css";

class ItemContainer extends Component {
  state = {
    title: "",
    description: "",
    price: "",
    availableDate: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.dispatch(
      createEvent(
        this.state.title,
        this.state.description,
        this.state.price,
        this.state.availableDate
      )
    );
    this.setState({
      title: "",
      description: "",
      price: "",
      availableDate: ""
    });
  };

  render() {
    return (
      <div>
        <h2 className="create-event-title">Share Your Item</h2>
        <ItemForm
          text={"itemForm"}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        />
      </div>
      //make a link here to go to event list
    );
  }
}

const mapStateToProps = state => {
  // console.log("STATE IN MSTP", state);
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(ItemContainer);
