import React, {Component} from 'react';

export class CreateTodoList extends Component {
  state = {
    name: ''
  };

  handleChange = event => {
    this.setState({name: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.trim()) {
      this.props.createTodo(this.state.name)
      this.setState({name: ''})
    }
  }

  render() {
    return (
      <div>
      <form onSubmit={(event) => this.handleSubmit(event)}>
        New List :
        <br/>
        <input type="text" name="newList" value={this.state.name} onChange={(event) => this.handleChange(event)}/><br/>
        <input type="submit" value="Create"/>
      </form>
    </div>);
  }
}
