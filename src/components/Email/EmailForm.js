import React from "react";
import { Form, Button } from "react-bootstrap";
import "./EmailForm.css";

const EmailForm = props => {
  return (
    <div>
      <Form className="email-form" onSubmit={props.handleSubmit}>
        <Form.Group controlId="formRenterName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={props.handleChange}
            type="text"
            name="name"
            value={props.values.name}
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            onChange={props.handleChange}
            name="message"
            value={props.values.message}
            placeholder="Send a message to the owner for details"
          />
        </Form.Group>
        <Button variant="secondary" type="submit">
          SEND MESSAGE
        </Button>
      </Form>
    </div>
  );
};

export default EmailForm;
