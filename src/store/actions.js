import { SET_INPUT, ADD_TODO } from "./constants";
export const setTodo = (payload) => ({
  type: SET_INPUT,
  payload,
});

export const addToDo = (payload) => ({
  type: ADD_TODO,
  payload,
});
