import React, { Component } from "react";
import { connect } from "react-redux";
import ItemListContainer from "../ItemList/ItemListContainer";
import SearchBarLocation from "../SearchByLocation/SearchBarLocation";
import { Button, Jumbotron } from "react-bootstrap";
import "./Home.css";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbotron">
          <br />
          <div className="jumbotron-content">
            <h1 className="jumbotron-title">{"let & GO"}</h1>
            <p className="jumbotron-text">Share More. Waste Less.</p>
          </div>
          <br />
          <SearchBarLocation />
        </Jumbotron>

        <ItemListContainer />
      </div>
    );
  }
}
