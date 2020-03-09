import React, { Component } from "react";
import { connect } from "react-redux";
import ItemDetails from "./ItemDetails";

class ItemDetailsContainer extends Component {
  render() {
    // console.log("image props", this.props.images);
    // console.log("params22", this.props.match.params.itemId);

    return (
      <div>
        <ItemDetails
          // images={this.props.images}
          items={this.props.items}
          itemID={this.props.match.params.itemId}
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
    items: state.items
  };
};

export default connect(mapStateToProps)(ItemDetailsContainer);
