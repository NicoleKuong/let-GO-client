import React, { Component } from "react";
import { Carousel, Button, Card, Accordion } from "react-bootstrap";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import EmailContainer from "../Email/EmailContainer";
import Payment from "../Payment/Payment";
import "./ItemDetails.css";

export default class ItemDetails extends Component {
  render() {
    const { items, itemID } = this.props;
    const currentItem = items.find(item => item.id === parseInt(itemID));
    const { title, price, description, user, images } = currentItem;

    return (
      <div className="item-container">
        <Carousel className="item-image">
          {images &&
            images.map((image, index) => {
              return (
                <Carousel.Item key={index}>
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
          <Card.Header>
            <strong>Title: </strong>
            {title}
          </Card.Header>
          <Card.Body>
            <Card.Title>Price: € {price}</Card.Title>
            <Card.Text>
              <strong>Description:</strong> <br /> {description}
            </Card.Text>
            <Card.Text>
              <strong>City:</strong> {user.city}
            </Card.Text>
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
        <Payment currentItem={currentItem} />

        {currentItem.user && (
          <Map center={[user.latitude, user.longitude]} zoom={13}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[user.latitude, user.longitude]}>
              <Popup>
                Address: {user.houseNumber}, {user.streetName}, {user.city}
              </Popup>
            </Marker>
          </Map>
        )}
      </div>
    );
  }
}
