import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUpForm.css";

const SignUpForm = props => {
  console.log("signup props", props);
  return (
    <Form className="form" onSubmit={props.handleSubmit}>
      <Form.Group controlId="formUserName">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="username"
          name="username"
          value={props.values.username}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="email"
          name="email"
          value={props.values.email}
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="password"
          name="password"
          value={props.values.password}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        SIGN UP
      </Button>
    </Form>
  );
};

export default SignUpForm;
