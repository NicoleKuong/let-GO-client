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
    // // console.log("itemconId", itemID);
    return (
      <div>
        <br />
        <h2 className="create-item-title">Make an offer for your item</h2>
        <br />
        <ImageUploadContainer setImgUrls={this.setImgUrls} />
        <ItemForm
          text={"itemForm"}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE IN itemCon", state);
  return {
    user: state.user,
    items: state.items.all
  };
};

export default connect(mapStateToProps)(ItemContainer);
