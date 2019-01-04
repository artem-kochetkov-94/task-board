import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";


const Boards = ({ boards, setActiveBoard }) => (
  <div className="boards">
    {boards.all.map(board => (
      <NavLink
        to={`/boards/${board.id}`}
        className="boards__item"
        key={board.id}
        onClick={() => setActiveBoard(board.id)}
      >
        {board.title}
      </NavLink>
    ))}
  </div>
);

export default Boards;
