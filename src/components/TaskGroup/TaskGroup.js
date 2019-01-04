import React from "react";
import "./style.scss";
import Task from "../Task/Task";
import TaskCreate from "../TaskCreate/TaskCreate";

const TaskGroup = ({
  id,
  title,
  tasks,
  taskCreate,
  taskRemove,
  taskCompleted
}) => (
  <div className="task-group">
    <div className="task-group__title">{title}</div>

    <TaskCreate taskCreate={taskCreate} taskGroupId={id} />

    <div className="task-group__inner">
      {tasks.map(task => (
        <Task
          taskId={task.id}
          key={task.id}
          taskGroupId={id}
          taskRemove={taskRemove}
          taskCompleted={taskCompleted}
          {...task}
        />
      ))}
    </div>
  </div>
);

export default TaskGroup;
