import React from "react";
import "./style.scss";
import CreateBoard from "../CreateBoard/";
import Boards from "../Boards/";

class BoardsPage extends React.Component {
  render() {
    const { boards, boardCreate, boardRemove, setActiveBoard, taskGroups } = this.props;

    return (
      <div className="boards-page">
        <CreateBoard boardCreate={boardCreate} />
        <Boards
          boards={boards}
          setActiveBoard={setActiveBoard}
          boardRemove={boardRemove}
          taskGroups={taskGroups}
        />
      </div>
    );
  }
}

export default BoardsPage;
