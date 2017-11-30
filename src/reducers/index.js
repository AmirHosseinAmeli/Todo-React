import {
  combineReducers
} from 'redux'

const initialState = JSON.parse(localStorage.getItem('todoLists')) || [];

function todoLists(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.map(todos =>
        todos.personId === action.personId ? { ...todos,
          todos: [...todos.todos,
            {
              id: todos.todos.reduce((maxId, todo) => Math.max(todo.id,
                maxId), -1) + 1,
              done: false,
              text: action.text,
              description: action.description
            }
          ]
        } :
        todos
      )
    case 'DELETE_TODO':
      return state.map(todos =>
        todos.personId === action.personId ? { ...todos,
          todos: todos.todos.filter(todo =>
            todo.id !== action.id
          )
        } :
        todos
      )
    case 'TOGGLE_TODO':
      return state.map(todos =>
        todos.personId === action.personId ? { ...todos,
          todos: todos.todos.map(todo =>
            todo.id === action.id ? { ...todo,
              done: !todo.done
            } :
            todo
          )
        } :
        todos
      )
    case 'CREATE_TODO':
      return [
        ...state,
        {
          name: action.name,
          personId: state.reduce((maxId, person) => Math.max(person.personId,
            maxId), -1) + 1,
          todos: []
        }
      ]

    default:
      return state
  }
}
export default combineReducers({
  todoLists
})
