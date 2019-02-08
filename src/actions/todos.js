import * as constants from '../constants'

export const removeTodo = id => ({
  type: constants.REMOVE_TODO,
  payload: id,
});

export const editTodo = (id, text) => ({
    type: constants.EDIT_TODO,
    payload: {
        id,
        text,
    }
})

  export const toggleTodo = (id) => ({
    type: constants.TOGGLE_TODO,
    payload: id
  });

  export const addTodo = (text) => ({
    type: constants.ADD_TODO,
    payload: text,
  });
