import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import "./SignUpForm.css";

const SignUpForm = props => {
  // console.log("signup props", props);
  return (
    <Form className="form" onSubmit={props.handleSubmit}>
      <Form.Group as={Col} controlId="formGridUserName">
        <Form.Label>User Name:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="username"
          name="username"
          value={props.values.username}
          placeholder="Enter username"
        />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={props.handleChange}
            type="email"
            name="email"
            value={props.values.email}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={props.handleChange}
            type="password"
            name="password"
            value={props.values.password}
            placeholder="Password"
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridfirstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            onChange={props.handleChange}
            type="text"
            name="firstName"
            value={props.values.firstName}
            placeholder="Enter first name"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridlastName">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            onChange={props.handleChange}
            type="text"
            name="lastName"
            value={props.values.lastName}
            placeholder="Enter last name"
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridStreetName">
          <Form.Label>Street Name:</Form.Label>
          <Form.Control
            onChange={props.handleChange}
            type="text"
            name="streetName"
            value={props.values.streetName}
            placeholder="Main St"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridHouseNo">
          <Form.Label>House No:</Form.Label>
          <Form.Control
            onChange={props.handleChange}
            type="number"
            name="houseNumber"
            value={props.values.houseNumber}
            placeholder="1234"
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            onChange={props.handleChange}
            type="text"
            name="city"
            value={props.values.city}
            placeholder="Amsterdam"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTelNumber">
          <Form.Label>Telephone Number:</Form.Label>
          <Form.Control
            onChange={props.handleChange}
            type="tel"
            name="telephoneNumber"
            value={props.values.telephoneNumber}
          />
        </Form.Group>
      </Form.Row>

      <Button onClick={props.getLocation} variant="dark" type="submit">
        SIGN UP
      </Button>
    </Form>
  );
};

export default SignUpForm;
