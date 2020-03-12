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
          <div>
            <h1>{"let & GO"}</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
          </div>
          <br />
          <SearchBarLocation />
        </Jumbotron>

        <ItemListContainer />
      </div>
    );
  }
}
