import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return <div>What would you like to do today {this.props.username}?</div>;
  }
}
