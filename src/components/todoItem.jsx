import React, {Component} from 'react';

export class TodoItem extends Component {

  changeTaskStatus() {
    this.props.actions.toggleTodo(this.props.personId, this.props.todo.id);
  }

  deleteTask() {
    this.props.actions.deleteTodo(this.props.personId, this.props.todo.id);
  }

  render() {
    return (
      <tr>
      <td>{this.props.todo.text}</td>
      <td>{this.props.todo.description}</td>
      <td><input type="checkbox" checked={this.props.todo.done} onChange={() => this.changeTaskStatus()}/></td>
      <td>
        <p onClick={() => this.deleteTask()}>deleteTask</p>
      </td>
    </tr>);
  }
}
