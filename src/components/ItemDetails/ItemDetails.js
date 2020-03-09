import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./ItemDetails.css";

export default class ItemDetails extends Component {
  render() {
    const { items, itemID } = this.props;

    const currentItem = items.find(item => item.id === parseInt(itemID));

    console.log("currentitem", currentItem);

    return (
      <div>
        <h2>Item Details</h2>

        <Carousel>
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

        <br />
        <p>Title:{currentItem.title}</p>
        <p>Description: {currentItem.description}</p>
        <p>Price: {currentItem.price}</p>
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
              <Popup>City: {currentItem.user.city}</Popup>
            </Marker>
          </Map>
        )}
      </div>
    );
  }
}
