import * as types from "../constants/boards";
import uuidv4 from "uuid/v4";

export const boardCreate = title => {
  return dispatch => {
    dispatch({
      type: types.BOARD_CREATE,
      payload: {
        id: uuidv4(),
        title,
        taskGroups: []
      }
    });
  };
};

export const setActiveBoard = boardId => ({
  type: types.SET_ACTIVE_BOARD,
  payload: {
    id: boardId
  }
});

// export const unsetActiveBoard = () => {};
