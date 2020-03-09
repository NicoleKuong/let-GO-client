import React, { Component } from "react";
import { connect } from "react-redux";
import ItemDetails from "./ItemDetails";

class ItemDetailsContainer extends Component {
  render() {
    console.log("image props", this.props.images);
    return (
      <div>
        <ItemDetails
          images={this.props.images}
          items={this.props.items}
          user={this.props.user}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE IN itemdetailsCon", state);
  return {
    user: state.user,
    items: state.items,
    images: state.images
  };
};

export default connect(mapStateToProps)(ItemDetailsContainer);
