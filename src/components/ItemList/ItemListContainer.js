import React from "react";
import { connect } from "react-redux";
import { getItems } from "../../actions/item";
import ItemList from "./ItemList";
import "./ItemList.css";

class ItemListContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(getItems());
  }
  render() {
    return (
      <div>
        {/* <p className="notice">
          please LOGIN to create an event or SIGNUP to create an account
        </p>
        <br /> */}

        <ItemList
          items={this.props.items}
          user={this.props.users}
          searchedItems={this.props.searchedItems}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE IN itemList", state);
  return {
    users: state.user,
    items: state.items
    // searchedItems: state.items.searched
  };
};

export default connect(mapStateToProps)(ItemListContainer);
