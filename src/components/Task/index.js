import React from "react";
import classNames from "classnames";
import "./style.scss";

const Task = ({
  title,
  taskId,
  taskGroupId,
  taskRemove,
  isCompleted,
  taskCompleted,
}) => (
  <div className={classNames("task", { "task--completed": isCompleted })}>
    <div className="task__title">{title}</div>
    <div className="task__actions">
      <button
        type="button"
        className="task__action task__completed"
        onClick={() => taskCompleted(taskId)}
      />
      <button
        type="button"
        className="task__action task__remove"
        onClick={() => taskRemove(taskId, taskGroupId)}
      />
    </div>
  </div>
);

export default Task;
