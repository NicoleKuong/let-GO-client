import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { searchByLocation, searchAll } from "../../actions/item";

import "./SearchBarLocation.css";

class SearchBarLocation extends Component {
  state = { keyword: "" };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchByLocation(this.state.keyword);

    this.setState({
      keyword: ""
    });
    this.checkKeyword();
  };

  handleClearSubmit = event => {
    event.preventDefault();

    this.setState({
      keyword: ""
    });
    this.checkKeyword();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkKeyword = () => {
    // console.log("check here");
    if (this.state.keyword === "") {
      this.props.searchAll();
    }
  };

  render() {
    return (
      <div className="search-bar-container">
        <Form
          className="search-bar-location"
          onSubmit={this.handleSubmit}
          // inline
        >
          <Form.Group
            className="search-bar-field"
            controlId="formSerachLocation"
          >
            <Form.Control
              className="input-group"
              onChange={this.handleChange}
              type="text"
              name="keyword"
              value={this.state.keyword}
              placeholder="Search Your City"
            />
          </Form.Group>
          <Button className="search-bar-btn" variant="secondary" type="submit">
            SEARCH
          </Button>
          <Button
            className="clearn-search-btn"
            variant="secondary"
            onClick={this.handleClearSubmit}
          >
            CLEAR SEARCH
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { searchByLocation, searchAll })(
  SearchBarLocation
);
