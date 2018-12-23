import { ACTIONS } from "./actions";
import uuidv4 from "uuid/v4";

const boardAdd = title => ({
  type: ACTIONS.TASK_ADD,
  payload: {
    id: uuidv4(),
    title
  }
});

export default boardAdd;
