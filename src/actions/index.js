export const addTodo = (personId,text,description) => ({ type: 'ADD_TODO', personId, text, description });
export const deleteTodo = (personId,id) => ({ type: 'DELETE_TODO', personId, id });
export const toggleTodo = (personId,id) => ({ type: 'TOGGLE_TODO', personId, id });
export const createTodo = name => ({ type: 'CREATE_TODO', name});
export const fetchDescription = (personId, text) => {
  return function (dispatch) {
    let url =
      'http://api.vajehyab.com/v3/search?token=53282.1sBRy5BHjRW3aY3EyUY1OX6Wjf0VbRscj34S9Fzt&type=exact&filter=dehkhoda&q=' +
      text;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let description =
          data.data.results.length ? data.data.results[0].text : '';
        dispatch(addTodo(personId, text, description));
      })
  }
}
