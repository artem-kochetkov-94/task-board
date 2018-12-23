import { ACTIONS } from "./actions";
import uuidv4 from "uuid/v4";

const boardCreate = title => ({
  type: ACTIONS.BOARD_CREATE,
  payload: {
    id: uuidv4(),
    title,
    tasksGroup: []
  }
});

export default boardCreate;
