import React, { Component } from "react";
import { Carousel, Button, Card, Accordion } from "react-bootstrap";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import EmailContainer from "../Email/EmailContainer";

import "./ItemDetails.css";

export default class ItemDetails extends Component {
  render() {
    const { items, itemID } = this.props;

    const currentItem = items.find(item => item.id === parseInt(itemID));

    console.log("currentitem", currentItem);

    return (
      <div className="item-container">
        <h2 style={{ textAlign: "center" }}>Item Details</h2>

        <Carousel
          style={{ width: "60%", marginRight: "20%", marginLeft: "20%" }}
        >
          {currentItem.images &&
            currentItem.images.map(image => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image.imageUrl}
                    alt="First slide"
                  />
                </Carousel.Item>
              );
            })}
        </Carousel>

        <Card className="item-info">
          <Card.Header>Title:{currentItem.title}</Card.Header>
          <Card.Body>
            <Card.Title>Price: {currentItem.price}</Card.Title>
            <Card.Text>Description: {currentItem.description}</Card.Text>
            <Card.Text>City: {currentItem.user.city}</Card.Text>
          </Card.Body>
        </Card>

        <Accordion defaultActiveKey="1" className="email-box">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Contact Owner
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <EmailContainer currentItem={currentItem} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br />
        {currentItem.user && (
          <Map
            center={[currentItem.user.latitude, currentItem.user.longitude]}
            zoom={13}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[currentItem.user.latitude, currentItem.user.longitude]}
            >
              <Popup>
                Address: {currentItem.user.houseNumber},{" "}
                {currentItem.user.streetName}, {currentItem.user.city}
              </Popup>
            </Marker>
          </Map>
        )}
      </div>
    );
  }
}
