import { combineReducers } from "redux";
import * as types from "../constants/";

const initialState = {
  allIds: ["0", "1", "2", "3", "4", "5", "6", "7"],
  byIds: {
    "0": {
      id: "0",
      title: "title-0",
      isCompleted: false
    },
    "1": {
      id: "1",
      title: "title-1",
      isCompleted: false
    },
    "2": {
      id: "2",
      title: "title-2",
      isCompleted: false
    },
    "3": {
      id: "3",
      title: "title-3",
      isCompleted: false
    },
    "4": {
      id: "4",
      title: "title-4",
      isCompleted: false
    },
    "5": {
      id: "5",
      title: "title-5",
      isCompleted: false
    },
    "6": {
      id: "6",
      title: "title-6",
      isCompleted: false
    },
    "7": {
      id: "7",
      title: "title-7",
      isCompleted: false
    }
  }
};

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case types.TASK_CREATE:
      return [...state, getTaskId(action.payload)];
    case types.TASK_REMOVE:
      return state.filter(id => id !== action.payload.taskId);
    default:
      return state;
  }
};

const byIds = (state = initialState.byIds, action) => {
  switch (action.type) {
    case types.TASK_CREATE:
      return {
        ...state,
        [getTaskId(action.payload)]: action.payload,
        isCompleted: false
      };
    case types.TASK_REMOVE:
      const newState = { ...state };
      delete newState[action.payload.taskId];
      return newState;
    case types.TASK_COMPLETED:
      return {
        ...state,
        [action.payload.taskId]: {
          ...state[action.payload.taskId],
          isCompleted: !state[action.payload.taskId].isCompleted
        }
      }
    default:
      return state;
  }
};

export default combineReducers({ allIds, byIds });

export const getTaskId = task => task.id;
export const getTaskById = (state, id) => state.byIds[id];
export const getTaskByIds = (state, ids) =>
  ids.map(id => getTaskById(state, id));
