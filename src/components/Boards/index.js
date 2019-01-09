import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import * as fromTaskGroups from "../../reducers/taskGroups";

const Boards = ({ boards, setActiveBoard, boardRemove, taskGroups }) => (
  <div className="boards">
    {boards.all.map(board => {
      const taskIds = fromTaskGroups.getTasksByTaskGroups(
        taskGroups,
        board.taskGroups
      );
      return (
        <div className="boards__item test__boards-item" key={board.id}>
          <NavLink
            to={`/boards/${board.id}`}
            onClick={() => setActiveBoard(board.id)}
            className="boards__item-link"
          >
            {board.title}
          </NavLink>
          <button
            type="button"
            className="boards__item-remove"
            onClick={() => boardRemove(board.id, board.taskGroups, taskIds)}
          />
        </div>
      );
    })}
  </div>
);

export default Boards;
