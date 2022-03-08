import React, { Component } from "react";

export default class TodoRows extends Component {
  render = () => {
    //maps each of the values in the todoItems state array to the DOM with a checkbox
    //not sure why this is written this way
    return (
      <>
        <div>{this.props.item.action}</div>
        <input
          type="checkbox"
          //set the checked box to reflect its state *
          checked={this.props.item.completed}
          onChange={() => this.props.callback(this.props.item)}
        />
      </>
    );
  };
}