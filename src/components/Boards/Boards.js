import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import { compose } from "recompose";
import { NavLink } from "react-router-dom";

const mapStateToProps = state => ({ boards: state.boards });

const Boards = ({ boards }) => (
  <div className="boards">
    {boards.map((board, index) => (
      <NavLink to={`/board/${index}`} className="boards__item" key={board.id}>
        {board.title}
      </NavLink>
    ))}
  </div>
);

export default compose(connect(mapStateToProps))(Boards);
