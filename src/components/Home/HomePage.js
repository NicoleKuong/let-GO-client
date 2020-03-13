import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import ItemListContainer from "../ItemList/ItemListContainer";
import "./Home.css";

export default class HomePage extends Component {
  render() {
    // const searchedItems = this.props.items && this.props.items.length > 0;
    return (
      <div>
        <Jumbotron className="jumbotron">
          <br />
          <div className="jumbotron-content">
            <h1 className="jumbotron-title">{"let & GO"}</h1>
            <p className="jumbotron-text">Share More. Waste Less.</p>
          </div>
          <br />
        </Jumbotron>

        <ItemListContainer />
      </div>
    );
  }
}
