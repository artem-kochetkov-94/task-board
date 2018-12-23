import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import { compose } from "recompose";
import TaskGroup from "../TaskGroup/TaskGroup";

const mapStateToProps = state => ({ boards: state.boards });

class Board extends React.Component {
  renderTaskGroup = (taskGroup, i) => {
    return <TaskGroup key={i} id={taskGroup} />;
  };

  render() {
    const board = this.props.boards[this.props.match.params.id];

    return (
      <div className="board">
        <div className="board__title">{board.title}</div>
        <div className="board__inner">
          {board.tasksGroup.map(this.renderTaskGroup)}
        </div>
      </div>
    );
  }
}

export default compose(connect(mapStateToProps))(Board);
