import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginForm.css";

const LoginForm = props => {
  return (
    <Form className="form" onSubmit={props.handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="email"
          name="email"
          value={props.values.email}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="password"
          name="password"
          value={props.values.password}
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="dark" type="submit">
        LOGIN
      </Button>
    </Form>
  );
};

export default LoginForm;
