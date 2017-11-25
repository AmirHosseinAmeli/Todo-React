import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export class TodoList extends Component {
  render() {
    let path = '/todos/' + this.props.todoList.name;
    return (
      <li>
      <Link to={path}>{this.props.todoList.name}</Link>
    </li>)
  }
}
