import * as types from "../constants/tasks";
import uuidv4 from "uuid/v4";

export const taskCreate = (title, taskGroupId) => {
  return dispatch => {
    dispatch({
      type: types.TASK_CREATE,
      payload: {
        id: uuidv4(),
        title,
        taskGroupId
      }
    });
  };
};

export const taskRemove = (taskId, taskGroupId) => ({
  type: types.TASK_REMOVE,
  payload: {
    taskId,
    taskGroupId
  }
});

export const taskCompleted = taskId => ({
  type: types.TASK_COMPLETED,
  payload: {
    taskId
  }
});
