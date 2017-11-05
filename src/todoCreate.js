import React, { Component } from 'react';

export class TodoCreate extends Component {
  
  render() {
  return (
    <div>
    <form onSubmit={this.props.create} >
    New Task : <br/>
    <input type="text" name="newTask" /><br/>
    <input type="submit" value="Create" />
    </form>
    </div>
  );
}
}
