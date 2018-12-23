import React from "react";
import "./style.scss";
import CreateBoard from "../CreateBoard/CreateBoard";
import Boards from "../Boards/Boards";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <CreateBoard />
        <Boards />
      </div>
    );
  }
}

export default Home;
