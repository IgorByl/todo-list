import * as constants from "../constants";

const initialState = [];

function createTodo(todos, text) {
	const lastTodo = todos[todos.length - 1];
	const id = lastTodo && lastTodo.id;
  return {
    isCompleted: false,
    text,
    id: (id || 0) + 1,
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case constants.EDIT_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    case constants.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    case constants.ADD_TODO:
      return state.concat(createTodo(state, action.payload));
    default:
      return state;
  }
}
