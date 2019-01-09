import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import BoardsPage from "../components/BoardsPage/";
import * as fromBoards from "../reducers/boards";
import { boardCreate, boardRemove, setActiveBoard } from "../actions/boards";

const mapStateToProps = state => ({
  boards: {
    all: fromBoards.getBoardByIds(state.boards, state.boards.allIds)
  },
  taskGroups: state.taskGroups
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      boardCreate,
      boardRemove,
      setActiveBoard
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsPage);
