import { ACTIONS } from "./actions";
import uuidv4 from "uuid/v4";

const boardAdd = title => ({
  type: ACTIONS.TASKS_GROUP_CREATE,
  payload: {
    id: uuidv4(),
    title,
    tasks: []
  }
});

export default boardAdd;
