import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router';
import {BrowserRouter} from 'react-router-dom'
import {TodoLists} from '../components/todoLists';
import {Todo} from '../components/todo';
import logo from './logo.svg';
import * as TodoActions from '../actions';
import './App.css';

const App = ({todoLists, actions}) => {
  localStorage.setItem('todoLists', JSON.stringify(todoLists));
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <BrowserRouter>
      <Switch>
        <Route exact path="/todos" render={() => (<TodoLists todoLists={todoLists} createTodo={actions.createTodo}/>)}/>
        {todoLists.map(todoList => (<Route key={todoList.personId} exact="exact" path={'/todos/' + todoList.name} render={() => (<Todo todoList={todoList} actions={actions}/>)} />))}
        <Redirect path="*" to="/todos"/>
      </Switch>
    </BrowserRouter>
  </div>)
}

App.propTypes = {
  todoLists: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({todoLists: state.todoLists})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
