import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { searchByLocation } from "../../actions/item";

class SearchBarLocation extends Component {
  state = { keyword: "" };

  handleSubmit = event => {
    event.preventDefault();
    console.log("submit?", this.props);
    // props.fetchProducts();
    this.props.searchByLocation(this.state.keyword);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formSerachLocation">
            <Form.Label>Location:</Form.Label>
            <Form.Control
              onChange={props.handleChange}
              type="text"
              name="keyword"
              value={this.state.keyword}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            SEARCH
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { searchByLocation })(SearchBarLocation);
