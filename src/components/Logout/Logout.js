import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { logout } from "../../actions/user";

class Logout extends Component {
  logout = () => {
    this.props.dispatch(logout());
  };

  render() {
    return (
      <div>
        <Button variant="secondary" onClick={this.logout}>
          LOG OUT
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("logout state", state);
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Logout);
