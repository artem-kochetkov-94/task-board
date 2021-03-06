import { combineReducers } from "redux";
import * as types from "../constants/";
import findArray from "../utils/findInArray";

const initialState = {
  allIds: ["0", "1", "2", "3"],
  byIds: {
    "0": {
      id: "0",
      title: "title-0",
      tasks: ["0", "1"]
    },
    "1": {
      id: "1",
      title: "title-1",
      tasks: ["2", "3"]
    },
    "2": {
      id: "2",
      title: "title-2",
      tasks: ["4", "5"]
    },
    "3": {
      id: "3",
      title: "title-3",
      tasks: ["6", "7"]
    }
  }
};

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case types.TASK_GROUP_CREATE:
      return [...state, getTaskGroupId(action.payload)];
    case types.TASK_GROUP_REMOVE:
      return state.filter(id => id !== action.payload.taskGroupId);
    case types.BOARD_REMOVE:
      return state.filter(id => {
        if (findArray(action.payload.taskGroupIds, id) !== -1) {
          return false;
        }

        return true;
      });
    default:
      return state;
  }
};

const byIds = (state = initialState.byIds, action) => {
  switch (action.type) {
    case types.TASK_GROUP_CREATE:
      return {
        ...state,
        [getTaskGroupId(action.payload)]: {
          id: action.payload.id,
          title: action.payload.title,
          tasks: action.payload.tasks
        }
      };
    case types.TASK_GROUP_REMOVE: {
      const newState = { ...state };
      delete newState[action.payload.taskGroupId];
      return newState;
    }
    case types.TASK_CREATE:
      return {
        ...state,
        [action.payload.taskGroupId]: {
          ...state[action.payload.taskGroupId],
          tasks: [...state[action.payload.taskGroupId].tasks, action.payload.id]
        }
      };
    case types.TASK_REMOVE:
      return {
        ...state,
        [action.payload.taskGroupId]: {
          ...state[action.payload.taskGroupId],
          tasks: [
            ...state[action.payload.taskGroupId].tasks.filter(
              id => id !== action.payload.taskId
            )
          ]
        }
      };
    case types.BOARD_REMOVE: {
      const newState = { ...state };
      action.payload.taskGroupIds.map(id => delete newState[id]);
      return newState;
    }
    default:
      return state;
  }
};

export default combineReducers({ allIds, byIds });

export const getTaskGroupId = taskGroup => taskGroup.id;
export const getTaskGroupById = (state, id) => state.byIds[id];
export const getTaskGroupByIds = (state, ids) =>
  ids.map(id => getTaskGroupById(state, id));

export const getTaskGroupTitleById = (state, id) => state.byIds[id].title;
export const getTasksByTaskGroup = (state, id) => state.byIds[id].tasks;
export const getTasksByTaskGroups = (state, ids) => {
  return ids.reduce((accomulator, id) => {
    return [...accomulator, ...state.byIds[id].tasks];
  }, []);
};
