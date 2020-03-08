import React, { Component } from "react";
import ItemForm from "./ItemForm";
import { connect } from "react-redux";
import { createItem } from "../../actions/item";
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
      createItem(
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
    const itemID = this.props.items.map(item => item.id);
    // console.log("itemconId", itemID);
    return (
      <div>
        <h2 className="create-item-title">Share Your Item</h2>

        <ItemForm
          text={"itemForm"}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
          itemId={itemID}
        />
      </div>
      //make a link here to go to event list
    );
  }
}

const mapStateToProps = state => {
  // console.log("STATE IN itemCon", state);
  return {
    user: state.user,
    items: state.items
  };
};

export default connect(mapStateToProps)(ItemContainer);
