import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {TodoItem} from './todoItem';
import {TodoCreate} from './todoCreate';

export class Todo extends Component {

  render() {
    const self = this;
    let todoItems = this.props.todoList.todos.map(function(todo) {
      return (<TodoItem key={todo.id} personId={self.props.todoList.personId} todo={todo} actions={self.props.actions}/>);
    });
    return (
      <div>
      <p className="App-intro">{this.props.todoList.name} Tasks:</p>
      <TodoCreate personId={this.props.todoList.personId} addTodo={this.props.actions.addTodo}/>
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
      <br/><br/>
      <Link to="/todos">Back To Home</Link>
    </div>
  );
  }
}
