import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

// const publicKey = process.env.REACT_APP_PUBLIC_KEY;
// console.log("key!!!", publicKey);
// console.log("currentitem", currentItem);

toast.configure();
export default class Payment extends Component {
  handlePayment = async token => {
    const databaseUrl = "http://localhost:4000";
    const { title, price } = this.props.currentItem;
    // console.log({ token, currentItem });

    const response = await axios.post(`${databaseUrl}/payment`, {
      token,
      title,
      price
    });
    const { status } = response.data;
    console.log("Status##", response.data);
    if (status === "success") {
      toast("Payment is successful. Please check email for details", {
        type: "success"
      });
    } else {
      toast("Payment is not successful", { type: "error" });
    }
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
