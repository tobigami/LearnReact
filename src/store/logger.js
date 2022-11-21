function logger(reducer) {
  return (preState, action) => {
    console.group(action.type);
    console.log("action :", action.type);
    console.log("preState :", preState);
    const nextState = reducer(preState, action);
    console.log("nextState :", nextState);
    console.groupEnd();
    return nextState;
  };
}
export default logger;
