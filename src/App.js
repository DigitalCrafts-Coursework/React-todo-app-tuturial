import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TodoRows from "./components/TodoRows";

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

  //loops through all the values in the todoItems state array
  todoRows = () =>
    this.state.todoItems.map((item) => (
      <TodoRows key={item.action} item={item} callback={this.toggleDone} />
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
