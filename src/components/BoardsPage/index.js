import React from "react";
import "./style.scss";
import CreateBoard from "../CreateBoard/";
import Boards from "../Boards/";

class BoardsPage extends React.Component {
  render() {
    const { boards, boardCreate, setActiveBoard } = this.props;

    return (
      <div className="boards-page">
        <CreateBoard boardCreate={boardCreate} />
        <Boards boards={boards} setActiveBoard={setActiveBoard} />
      </div>
    );
  }
}

export default BoardsPage;
