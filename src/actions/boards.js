import * as types from "../constants/boards";
import uuidv4 from "uuid/v4";

export const boardCreate = title => ({
  type: types.BOARD_CREATE,
  payload: {
    id: uuidv4(),
    title,
    tasksGroup: []
  }
});

export const setActiveBoard = boardId => ({
  type: types.SET_ACTIVE_BOARD,
  payload: {
    id: boardId
  }
});

export const unsetActiveBoard = () => {};
