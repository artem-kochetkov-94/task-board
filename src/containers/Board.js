import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Board from "../components/Board/";
import * as fromBoards from "../reducers/boards";
import { taskCreate, taskRemove, taskCompleted } from "../actions/tasks";
import { taskGroupCreate, taskGroupRemove } from "../actions/taskGroups";

const mapStateToProps = state => ({
  board: fromBoards.getBoardById(state.boards, state.boards.activeId),
  taskGroups: state.taskGroups,
  tasks: state.tasks
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      taskCreate,
      taskRemove,
      taskCompleted,
      taskGroupCreate,
      taskGroupRemove,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
