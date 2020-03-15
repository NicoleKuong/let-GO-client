import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

// const publicKey = process.env.REACT_APP_PUBLIC_KEY;
// console.log("key!!!", publicKey);
// console.log("currentitem", currentItem);

export default class Payment extends Component {
  handlePayment = async token => {
    const databaseUrl = "http://localhost:4000";
    const { currentItem } = this.props;
    // console.log({ token, currentItem });

    const response = await axios.post(`${databaseUrl}/payment`, {
      token,
      currentItem
    });
    const { status } = response.data;
  };

  render() {
    const { currentItem } = this.props;
    // console.log("currentItem in payment", currentItem);
    return (
      <div>
        <StripeCheckout
          stripeKey="pk_test_BUbsWezAWcQO98PoVVM3cDrs00ii9f5FOg"
          token={this.handlePayment}
          name={currentItem.title}
          amount={currentItem.price * 100}
          billingAddress
          shippingAddress
        >
          <Button variant="secondary" type="submit">
            RENT NOW
          </Button>
        </StripeCheckout>
      </div>
    );
  }
}
