import React, {Component} from 'react';

export class TodoCreate extends Component {
  state = {
    text: ''
  };

  handleChange = event => {
    this.setState({text: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.text.trim()) {
      this.props.addTodo(this.state.text)
      this.setState({text: ''})
    }
  }

  render() {
    return (<div>
      <form onSubmit={(event) => this.handleSubmit(event)}>
        New Task :
        <br/>
        <input type="text" name="newTask" value={this.state.text} onChange={(event) => this.handleChange(event)}/><br/>
        <input type="submit" value="Create"/>
      </form>
    </div>);
  }
}
