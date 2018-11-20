import React, { Component } from 'react';

import Task from './Task.js';

import styles from '../css/styles.css';

// App component - represents the whole app
export default class App extends Component {
	
  getTasks() {
    const URL = "http://localhost:8083/tasks";
    fetch(URL, {mode: "cors"})
      .then(data => data.json())
      .then(tasks => console.log(`tasks: ${tasks}`))
	  .catch(error => console.log(`parsing failed: ${error}`))

    return []
  }
 
  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}