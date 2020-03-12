import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class ItemList extends Component {
  render() {
    const { items } = this.props;
    const { user } = this.props;

    return (
      <div>
        {!items && "Loading..."}
        {items && (
          <div>
            {items.map((item, index) => (
              <Card className="item-card" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.images[0].imageUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>Description: {item.description}</Card.Text>
                  <Card.Text>Price: {item.price}</Card.Text>
                  <Link to={`items/${item.id}`}>
                    <Button variant="secondary">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }
}
