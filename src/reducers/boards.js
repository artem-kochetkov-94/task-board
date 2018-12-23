import { ACTIONS } from "../actions/actions";

const initialState = [
  {
    id: "0",
    title: "project-0",
    tasksGroup: ["0", "1"]
  },
  {
    id: "1",
    title: "project-1",
    tasksGroup: ["2", "3"]
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.BOARD_CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
}
