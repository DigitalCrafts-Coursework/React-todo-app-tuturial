import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Matthew",
      todoItems: [
        { action: "buy groceries", completed: false },
        { action: "wash dog", completed: false },
        { action: "exercise", completed: false },
      ],
      newTodo: "",
    };
    this.todoRows = this.todoRows.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.newToDo = this.newToDo.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  //updates the newTodo state value as typing occurs
  updateValue = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  //appends newTodo to todoItems state array
  newToDo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, completed: false },
      ],
    });
  };

  //clicking on checkbox loops through the todoItems state array
  toggleDone = (selectedToDo) =>
    this.setState({
      todoItems: this.state.todoItems.map(
        (item) =>
          item.action === selectedToDo.action
            ? { ...item, completed: !item.completed }
            : item //not sure why this is just 'item' and not 'item.completed'
      ),
    });

  //maps each of the values in the todoItems state array to the DOM with a checkbox
  //not sure why this is written this way
  todoRows = () =>
    this.state.todoItems.map((item, index) => (
      <>
        <div key={item.action}>{item.action}</div>
        <input
          key={index}
          type="checkbox"
          //set the checked box to reflect its state *
          checked={item.completed}
          onChange={() => this.toggleDone(item)} //not sure why this needs to be a callback function
        />
      </>
    ));

  render = () => {
    return (
      <div className="container">
        <NavBar username={this.state.username} />
        <input
          type="text"
          className="inputBox"
          value={this.state.newTodo}
          onChange={this.updateValue}
        />
        <button onClick={this.newToDo}>Submit</button>
        <div>{this.todoRows()}</div>
      </div>
    );
  };
}
