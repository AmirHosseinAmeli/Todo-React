import {combineReducers} from 'redux'

const initialState = JSON.parse(localStorage.getItem('todoList')) || [];

function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          done: false,
          text: action.text
        }
      ]

    case 'DELETE_TODO':
      return state.filter(todo =>
        todo.id !== action.id
      )

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo,
          done: !todo.done
        } :
        todo
      )

    default:
      return state
  }
}
export default combineReducers({
  todos
})
