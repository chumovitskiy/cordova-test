import React, { Component } from 'react';

import Task from './Task.js';

import styles from '../css/styles.css';

// App component - represents the whole app
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = this.initState()
  }

  initState() {
    return {
      tasks: []
    }
  }

  componentDidMount() {
    const URL = "http://localhost:8080/tasks"

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(`data.tasks: ${data}`)
        this.setState({ tasks: data })
      })
      .catch(error => console.log(`parsing failed: ${error}`))
  }
 
  renderTasks() {
    const { tasks } = this.state
    return tasks.map((task) => (
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