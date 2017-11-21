import React, {Component} from 'react';

export class TodoItems extends Component {

  changeTaskStatus() {
    this.props.actions.toggleTodo(this.props.item.id)
  }

  deleteTask() {
    this.props.actions.deleteTodo(this.props.item.id)
  }

  render() {
    return (
      <tr>
      <td>{this.props.item.text}</td>
      <td><input type="checkbox" checked={this.props.item.done} onChange={() => this.changeTaskStatus()}/></td>
      <td>
        <p onClick={() => this.deleteTask()}>deleteTask</p>
      </td>
    </tr>);
  }
}
