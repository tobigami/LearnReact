import { useRef } from "react";
import "./App.css";
import { useStore } from "./store";
import { actions } from "./store";
// import { StoreContext } from "./store";
// import { useContext, useReducer } from "react";
function App() {
  const [state, dispatch] = useStore();
  const { todoInput, todoList } = state;
  const inputRef = useRef();
  console.log(inputRef);
  function handleAdd() {
    dispatch(actions.addToDo(todoInput));
    dispatch(actions.setTodo(""));
    inputRef.current.focus();
  }
  return (
    <div className="container dark">
      {/* <button className="switchTheme">test</button> */}
      <h1>hello world</h1>
      <input
        ref={inputRef}
        value={todoInput}
        type="text"
        placeholder="enter your task"
        onChange={(e) => dispatch(actions.setTodo(e.target.value))}
      />
      <button onClick={handleAdd}>Add</button>
      {todoList.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </div>
  );
}
export default App;
