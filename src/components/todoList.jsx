import React, {Component} from 'react';
import {TodoItems} from './todoItems';
import {TodoCreate} from './todoCreate';

export class Todo extends Component {

  componentDidUpdate() {
    localStorage.setItem('todoList', JSON.stringify(this.props.todos));
  }

  render() {
    const self = this;
    let todoItems = this.props.todos.map(function(item) {
      return (<TodoItems key={item.id} item={item} actions={self.props.actions}/>);
    });
    return (
      <div>
      <TodoCreate addTodo={this.props.actions.addTodo}/>
      <br/><br/><br/>
      <table>
        <tbody>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
          {todoItems}
        </tbody>
      </table>
    </div>);
  }
}
