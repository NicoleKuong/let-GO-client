import React, { Component } from "react";
import { connect } from "react-redux";
import ItemDetails from "./ItemDetails";

class ItemDetailsContainer extends Component {
  render() {
    return (
      <div>
        <ItemDetails
          items={this.props.items}
          itemID={this.props.match.params.itemId}
          user={this.props.user}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("STATE IN itemdetailsCon", state);
  return {
    user: state.user,
    items: state.items.all,
  };
};

export default connect(mapStateToProps)(ItemDetailsContainer);
