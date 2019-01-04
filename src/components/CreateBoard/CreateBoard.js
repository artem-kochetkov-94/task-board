import React from "react";
import "./style.scss";
import Button from "../Button/Button";

class CreateBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formVisibility: false,
      boardTitle: null,
      errors: []
    };
  }

  formVisibilityToggle = () => {
    if (this.state.formVisibility) {
      return this.setState(state => ({
        formVisibility: !this.state.formVisibility,
        boardTitle: null,
        errors: []
      }));
    }

    this.setState(state => ({
      formVisibility: !this.state.formVisibility
    }));
  };

  boardCreate = title => {
    let errors = [];

    if (!title) {
      errors.push({
        field: "boardName",
        error: "Oops! Looks like you forgot the name!"
      });
    }

    if (errors.length) {
      return this.setState({ errors: errors });
    }

    if (this.state.errors.length) {
      this.setState({
        errors: []
      });
    }

    this.props.boardCreate(title);
  };

  boardNameHandleChange = e => {
    this.setState({
      boardTitle: e.target.value
    });
  };

  handleErrors = field =>
    this.state.errors
      .filter(error => error.field === field)
      .map(error => (
        <p className="error" key={error.error}>
          {error.error}
        </p>
      ));

  render() {
    const { formVisibility } = this.state;

    return (
      <div className="create-board">
        {!formVisibility && (
          <button
            type="button"
            className="create-board__preview"
            onClick={this.formVisibilityToggle}
          >
            <span className="create-board__preview-title">
              Create a new board...
            </span>
          </button>
        )}
        {formVisibility && (
          <div className="create-board__main">
            <div className="create-board__header">
              <div className="create-board__title">Creating a board</div>
              <button
                type="button"
                className="create-board__cancel"
                onClick={this.formVisibilityToggle}
              />
            </div>
            <div className="create-board__body">
              <form onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="boardName" className="form-group__title">
                    What shall we call the board?
                  </label>
                  <input
                    type="text"
                    name="boardName"
                    id="boardName"
                    value={this.state.boardTittle}
                    onChange={this.boardNameHandleChange}
                  />
                  {this.handleErrors("boardName")}
                </div>
                <div className="create-board__actions">
                  <Button
                    tagName="button"
                    type="button"
                    classNames="button--transparent create-board__action"
                    clickHandler={() => this.formVisibilityToggle()}
                  >
                    Cancel
                  </Button>
                  <Button
                    tagName="button"
                    type="submit"
                    classNames="button--gray create-board__action"
                    clickHandler={() => this.boardCreate(this.state.boardTitle)}
                  >
                    Create
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CreateBoard;
