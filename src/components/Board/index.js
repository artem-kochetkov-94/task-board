import React from "react";
import "./style.scss";
import TaskGroup from "../TaskGroup/";
import HomeLink from "../HomeLink/";
import CreateTaskGroup from "../CreateTaskGroup/";
import * as fromTaskGroups from "../../reducers/taskGroups";
import * as fromTasks from "../../reducers/tasks";

const Board = ({
  board,
  taskGroups,
  tasks,
  taskCreate,
  taskRemove,
  taskGroupCreate,
  taskGroupRemove,
  taskCompleted
}) => {
  return (
    <div className="board-outer">
      <HomeLink />
      <div className="board">
        <div className="board__header">
          <div className="board__title">{board.title}</div>
          <CreateTaskGroup
            taskGroupCreate={taskGroupCreate}
            boardId={board.id}
          />
        </div>
        <div className="board__inner">
          {board.taskGroups &&
            board.taskGroups.map(id => (
              <TaskGroup
                key={id}
                id={id}
                title={fromTaskGroups.getTaskGroupTitleById(taskGroups, id)}
                tasks={fromTasks.getTaskByIds(
                  tasks,
                  fromTaskGroups.getTasksByTaskGroup(taskGroups, id)
                )}
                taskIds={fromTaskGroups.getTasksByTaskGroup(taskGroups, id)}
                taskCreate={taskCreate}
                taskRemove={taskRemove}
                taskCompleted={taskCompleted}
                taskGroupRemove={taskGroupRemove}
                boardId={board.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
