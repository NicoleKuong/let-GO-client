import React from "react";
import { Form, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const ItemForm = props => {
  // console.log("itemform props", props);
  // const { itemId } = props;
  return (
    <Form className="itemform" onSubmit={props.handleSubmit}>
      <Form.Group controlId="formUserName">
        <Form.Label>Title:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="text"
          name="title"
          value={props.values.title}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Description:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="text"
          name="description"
          value={props.values.description}
          placeholder="Enter event description"
        />
      </Form.Group>

      <Form.Group controlId="formImage">
        <Form.Label>Price :</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="number"
          name="price"
          value={props.values.price}
          placeholder="Enter price per day"
        />
      </Form.Group>
      <Form.Group controlId="formStartDate">
        <Form.Label>Available Date:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="date"
          name="availableDate"
          value={props.values.availableDate}
        />
      </Form.Group>
      {/* <Link to="/"> */}
      <Button variant="secondary" type="submit">
        SHARE
      </Button>
      {/* </Link> */}
    </Form>
  );
};

export default ItemForm;
