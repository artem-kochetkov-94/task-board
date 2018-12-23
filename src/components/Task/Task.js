import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import { compose } from "recompose";

const mapStateToProps = state => ({
  tasks: state.tasks
});

class Task extends React.Component {
  render() {
    const task = this.props.tasks[this.props.id];

    return (
      <div className="task">
        <div className="task__title">{task.title}</div>
      </div>
    );
  }
}

export default compose(connect(mapStateToProps))(Task);
