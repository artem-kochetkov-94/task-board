import React from "react";
import "./style.scss";
import TaskGroup from "../TaskGroup/TaskGroup";
import HomeLink from "../HomeLink/HomeLink";
import * as fromTaskGroups from "../../reducers/taskGroups";
import * as fromTasks from "../../reducers/tasks";

const Board = ({ board, taskGroups, tasks, taskCreate, taskRemove }) => {
  return (
    <div className="board-outer">
      <HomeLink />
      <div className="board">
        <div className="board__title">{board.title}</div>
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
                taskCreate={taskCreate}
                taskRemove={taskRemove}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
