import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import { compose } from "recompose";
import Task from "../Task/Task";

const mapStateToProps = state => ({
  tasksGroup: state.tasksGroup
});

class TaskGroup extends React.Component {
  renderTaskGroup = (task, i) => {
    return (
      <Task key={i} id={task} />
    );
  };

  render() {
    const taskGroup = this.props.tasksGroup[this.props.id];

    return (
      <div className="task-group">
        <div className="task-group__title">{taskGroup.title}</div>
        <div className="task-group__inner">
          {taskGroup.tasks.map(this.renderTaskGroup)}
        </div>
      </div>
    );
  }
}

export default compose(connect(mapStateToProps))(TaskGroup);
