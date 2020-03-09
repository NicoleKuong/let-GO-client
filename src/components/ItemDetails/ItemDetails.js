import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";

export default class ItemDetails extends Component {
  render() {
    const { images } = this.props;
    const { items } = this.props;
    const { user } = this.props;
    return (
      <div>
        <h2>Item Details</h2>

        {images.map(image => {
          return (
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image.imageUrl}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          );
        })}

        <br />
        <p>Title:</p>
        <p>Description:</p>
        <p>Price:</p>
        <div id="mapid"></div>
      </div>
    );
  }
}
