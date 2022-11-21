import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { addJob, setJob, removeJob } from "./actions";
import logger from "./logger";

// 4. Dispatch
function ToDoApp() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;

  const inputRef = useRef();
  function handleSubmit() {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  }
  return (
    <div className="wrapper">
      <h1>To do list</h1>
      <input
        ref={inputRef}
        onChange={(e) => dispatch(setJob(e.target.value))}
        value={job}
        type="text"
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span
              onClick={() => dispatch(removeJob(index))}
              style={{ cursor: "pointer" }}
            >
              {" "}
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
