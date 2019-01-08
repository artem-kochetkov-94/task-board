import * as types from "../constants/taskGroups";
import uuidv4 from "uuid/v4";

export const taskGroupCreate = (title, boardId) => {
  return dispatch => {
    dispatch({
      type: types.TASK_GROUP_CREATE,
      payload: {
        id: uuidv4(),
        title,
        tasks: [],
        boardId
      }
    });
  };
};

export const taskGroupRemove = (taskGroupId, boardId, taskIds) => ({
  type: types.TASK_GROUP_REMOVE,
  payload: {
    taskGroupId,
    boardId,
    taskIds
  }
});
