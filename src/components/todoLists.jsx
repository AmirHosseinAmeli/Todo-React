import React, {Component} from 'react';
import {TodoList} from './todoList';
import {CreateTodoList} from './createTodoList';

export class TodoLists extends Component {
  render() {
    let todoLists = this.props.todoLists.map(function(todoList) {
      return (<TodoList key={todoList.personId} todoList={todoList}/>);
    });

    return (
      <div>
      <CreateTodoList createTodo={this.props.createTodo}/>
      <ul>
        {todoLists}
      </ul>
    </div>)
  }
}
