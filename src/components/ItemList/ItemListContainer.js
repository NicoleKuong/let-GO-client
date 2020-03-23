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
        <ItemList
          items={this.props.items}
          searchedItems={this.props.searchedItems}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("STATE IN itemList", state.items.all);
  return {
    users: state.user,
    items: state.items.all,
    searchedItems: state.items.searched
  };
};

export default connect(mapStateToProps)(ItemListContainer);
