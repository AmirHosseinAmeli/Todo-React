import React, {Component} from 'react';
import {TodoItems} from './todoItems';
import {TodoCreate} from './todoCreate';

export class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoList: JSON.parse(localStorage.getItem('todoList'))
    };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.changeTaskStatus = this.changeTaskStatus.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addNewTodo(event) {
    event.preventDefault()
    if (event.target['newTask'].value) {
      let newTodo = {
        name: event.target['newTask'].value,
        done: false
      }
      event.target['newTask'].value = '';
      let todoList = this.state.todoList;
      todoList.push(newTodo);
      this.setState({todo: todoList});
    }
  }

  changeTaskStatus(index) {
    let todoList = this.state.todoList;
    todoList[index].done = !todoList[index].done;
    this.setState({todo: todoList});
  }

  deleteTask(index) {
    let todoList = this.state.todoList;
    todoList.splice(index, 1);
    this.setState({todo: todoList});
  }

  componentDidUpdate() {
    localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
  }

  render() {
    const self = this;
    let todoItems = this.state.todoList.map(function(item, index) {
      return (<TodoItems name={item.name} done={item.done} onChange={() => self.changeTaskStatus(index)} deleteTask={() => self.deleteTask(index)}/>);
    });
    return (
      <div>
        <TodoCreate create={this.addNewTodo}/>
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
      </div>
    );
  }
}
