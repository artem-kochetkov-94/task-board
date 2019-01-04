import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Board from "../components/Board/Board";
import * as fromBoards from "../reducers/boards";
import { taskCreate, taskRemove } from "../actions/tasks";

const mapStateToProps = state => ({
  board: fromBoards.getBoardById(state.boards, state.boards.activeId),
  taskGroups: state.taskGroups,
  tasks: state.tasks
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      taskCreate,
      taskRemove
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
