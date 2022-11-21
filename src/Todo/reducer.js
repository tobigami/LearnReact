import { SET_JOB, ADD_JOB, REMOVE_JOB } from "./constants";

export const initState = {
  job: "",
  jobs: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      if (action.payload === "") {
        return {
          ...state,
          jobs: [...state.jobs],
        };
      } else {
        return {
          ...state,
          jobs: [...state.jobs, action.payload],
        };
      }
    case REMOVE_JOB: {
      let newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };
    }
    default:
      throw new Error();
  }
};

export default reducer;
