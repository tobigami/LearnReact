import { SET_INPUT, ADD_TODO } from "./constants";
const initState = {
  todoInput: "",
  todoList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
      break;
    case ADD_TODO:
      if (action.payload === "") {
        return {
          ...state,
        };
      }
      if (action.payload !== "") {
        return {
          ...state,
          todoList: [...state.todoList, action.payload],
        };
      }
      break;
    default:
      throw new Error();
  }
}
export { initState };
export default reducer;
