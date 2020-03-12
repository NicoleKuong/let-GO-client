import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

export default class ItemList extends Component {
  render() {
    const { items } = this.props;
    console.log("itemsssss", items);
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
                  <Card.Text>
                    <FontAwesomeIcon icon={faMapMarkedAlt} /> {item.user.city},
                    Netherlands
                  </Card.Text>
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
