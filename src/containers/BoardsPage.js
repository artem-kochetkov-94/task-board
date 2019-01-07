import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import BoardsPage from "../components/BoardsPage/";
import * as fromBoards from "../reducers/boards";
import { boardCreate, setActiveBoard } from "../actions/boards";

const mapStateToProps = state => ({
  boards: {
    all: fromBoards.getBoardByIds(state.boards, state.boards.allIds)
  }
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      boardCreate,
      setActiveBoard
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsPage);
