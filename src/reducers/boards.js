import { combineReducers } from "redux";
import * as types from "../constants/boards";

const initialState = {
  activeId: "1",
  allIds: ["0", "1"],
  byIds: {
    "0": {
      id: "0",
      title: "project-0",
      taskGroups: ["0", "1"]
    },
    "1": {
      id: "1",
      title: "project-1",
      taskGroups: ["2", "3"]
    }
  }
};

const activeId = (state = initialState.activeId, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_BOARD:
      return getBoardId(action.payload);
    case types.UNSET_ACTIVE_BOARD:
      return null;
    default:
      return state;
  }
};

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case types.BOARD_CREATE:
      return [...state, getBoardId(action.payload)];
    default:
      return state;
  }
};

const byIds = (state = initialState.byIds, action) => {
  switch (action.type) {
    case types.BOARD_CREATE:
      return {
        ...state,
        [getBoardId(action.payload)]: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({ activeId, allIds, byIds });

export const getBoardId = board => board.id;
export const getBoardById = (state, id) => state.byIds[id];
export const getBoardByIds = (state, ids) =>
  ids.map(id => getBoardById(state, id));
