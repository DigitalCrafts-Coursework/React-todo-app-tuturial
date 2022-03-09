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
    this.deleteTask = this.deleteTask.bind(this);
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

  //delete task on checkbox click
  deleteTask = (selectedToDo) => {
    return this.setState({
      todoItems: this.state.todoItems.filter(
        (item) => item.action !== selectedToDo.action
      ),
    });
  };

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
        <div className="title">Tasks to complete</div>
        {this.state.todoItems.map((item) => {
          return (
            !item.completed && (
              <TodoRows
                key={item.action}
                item={item}
                update={this.toggleDone}
                delete={this.deleteTask}
              />
            )
          );
        })}

        <div className="title">Completed tasks</div>
        {this.state.todoItems.map((item) => {
          return (
            item.completed && (
              <TodoRows
                key={item.action}
                item={item}
                update={this.toggleDone}
                delete={this.deleteTask}
              />
            )
          );
        })}
      </div>
    );
  };
}
