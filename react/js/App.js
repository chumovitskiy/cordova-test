import React, { Component } from 'react';

import Task from './Task.js';

import '../css/styles.css';

// App component - represents the whole app
export default class App extends Component {
  
  constructor(props) {
    super(props);
	
	const iDevices = [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ];
	
	if (!!navigator.platform) {
      while (iDevices.length) {
        if (navigator.platform === iDevices.pop()){
			styles.base.paddingTop = '20px'
		}
      }
    }
  }
	
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
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