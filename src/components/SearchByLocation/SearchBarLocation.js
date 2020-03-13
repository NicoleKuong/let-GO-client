import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { searchByLocation } from "../../actions/item";
import "./SearchBarLocation.css";

class SearchBarLocation extends Component {
  state = { keyword: "" };

  handleSubmit = event => {
    event.preventDefault();

    this.props.searchByLocation(this.state.keyword);
    this.setState({
      keyword: ""
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="search-bar-container">
        <Form
          className="search-bar-location"
          onSubmit={this.handleSubmit}
          inline
        >
          <Form.Group controlId="formSerachLocation">
            {/* <Form.Label>Location:</Form.Label> */}
            <Form.Control
              className="mr-md-5"
              onChange={this.handleChange}
              type="text"
              name="keyword"
              value={this.state.keyword}
              placeholder="Search Your City"
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            SEARCH
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { searchByLocation })(SearchBarLocation);
