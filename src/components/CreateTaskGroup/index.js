import React from "react";
import "./style.scss";
import Button from "../Button/";

class CreateTaskGroup extends React.Component {
  state = {
    formVisibility: false,
    taskGroupName: ""
  };

  formVisibilityToggle = () => {
    return this.setState(state => ({
      ...state,
      formVisibility: !this.state.formVisibility
    }));
  };

  handleChange = e => {
    this.setState({
      taskGroupName: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      taskGroupName: ""
    });
  };

  render() {
    return (
      <div className="create-task-group">
        {!this.state.formVisibility && (
          <button
            className="create-task-group__preview"
            onClick={this.formVisibilityToggle}
          >
            Add a list...
          </button>
        )}
        {this.state.formVisibility && (
          <div className="create-task-group__hide">
            <form onSubmit={this.handleSubmit}>
              <div className="create-task-group__form-group">
                <div className="form-group">
                  <input
                    type="text"
                    value={this.state.taskGroupName}
                    onChange={this.handleChange}
                    placeholder="add a list..."
                  />
                </div>
              </div>
              <Button
                tagName="button"
                type="submit"
                classNames="button--gray create-task-group__button"
                clickHandler={() => {
                  this.props.taskGroupCreate(
                    this.state.taskGroupName,
                    this.props.boardId
                  );
                }}
                disabled={!this.state.taskGroupName ? "disabled" : ""}
              >
                add
              </Button>
            </form>
            <button
              type="button"
              className="create-task-group__cansel"
              onClick={this.formVisibilityToggle}
            />
          </div>
        )}
      </div>
    );
  }
}

export default CreateTaskGroup;
