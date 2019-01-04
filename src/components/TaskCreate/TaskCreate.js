import React from "react";
import "./style.scss";

class TaskCreate extends React.Component {
  state = {
    taskName: ""
  };

  handleChange = e => {
    this.setState({
      taskName: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.taskName) {
      this.props.taskCreate(this.state.taskName, this.props.taskGroupId);
      this.setState({
        taskName: ""
      });
    }
  };

  render() {
    return (
      <div className="task-create">
        <form onSubmit={this.handleSubmit}>
          <div className="task-create__inner">
            <div className="form-group">
              <input
                type="text"
                value={this.state.taskName}
                onChange={this.handleChange}
              />
            </div>
            <button className="task-create__button">+</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskCreate;
