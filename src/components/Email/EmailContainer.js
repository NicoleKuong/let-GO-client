import React, { Component } from "react";
import EmailForm from "./EmailForm";
import { connect } from "react-redux";
import { createEmail } from "../../actions/email";

class EmailContainer extends Component {
  state = {
    name: "",
    message: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(createEmail(this.state));
    this.setState({
      name: "",
      message: ""
    });
  };

  render() {
    // const itemID = this.props.items.map(item => item.id);
    // console.log("itemconId", itemID);
    return (
      <div>
        <EmailForm
          text={"itemForm"}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("STATE IN EmailCon", state);
  return {
    user: state.user,
    items: state.items
  };
};

export default connect(mapStateToProps)(EmailContainer);
