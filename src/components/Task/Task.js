import React from "react";
import "./style.scss";

const Task = ({ title, taskId, taskGroupId, taskRemove }) => (
  <div className="task">
    <div className="task__title">{title}</div>
    <div className="task__actions">
      <button
        type="button"
        className="task__action task__remove"
        onClick={() => taskRemove(taskId, taskGroupId)}
      >
        -
      </button>
    </div>
  </div>
);

export default Task;
