import React, { Component } from 'react';

export class TodoItems extends Component {
  render() {
  return (
    <tr>
    <td>{this.props.name}</td>
    <td><input type="checkbox" checked={this.props.done} onChange={this.props.onChange}/></td>
    <td><p onClick={this.props.deleteTask}>deleteTask</p></td>
    </tr>
  );
}
}
