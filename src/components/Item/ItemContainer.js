import React, { Component } from "react";
import ItemForm from "./ItemForm";
import { connect } from "react-redux";
import { createItem } from "../../actions/item";
import ImageUploadContainer from "../ImageUpload/ImageUploadContainer";
import "./ItemForm.css";

class ItemContainer extends Component {
  state = {
    title: "",
    description: "",
    price: "",
    availableDate: "",
    imageUrls: []
  };
  setImgUrls = async urls => {
    // console.log("getting urls", urls);
    await this.setState({ imageUrls: urls });
    // console.log("local state for item", this.state);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(createItem(this.state));
    this.setState({
      title: "",
      description: "",
      price: "",
      availableDate: "",
      imageUrls: []
    });
  };

  render() {
    // const itemID = this.props.items.map(item => item.id);
    // // console.log("itemconId", itemID);
    return (
      <div>
        <h2 className="create-item-title">Share Your Item</h2>
        <ImageUploadContainer setImgUrls={this.setImgUrls} />
        <ItemForm
          text={"itemForm"}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
          // itemId={itemID}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE IN itemCon", state);
  return {
    user: state.user,
    items: state.items
  };
};

export default connect(mapStateToProps)(ItemContainer);
