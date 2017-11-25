export const addTodo = (personId,text) => ({ type: 'ADD_TODO', personId, text });
export const deleteTodo = (personId,id) => ({ type: 'DELETE_TODO', personId, id });
export const toggleTodo = (personId,id) => ({ type: 'TOGGLE_TODO', personId, id });
export const createTodo = name => ({ type: 'CREATE_TODO', name});
