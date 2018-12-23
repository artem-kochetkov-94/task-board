import { ACTIONS } from "../actions/actions";

const initialState = [
  {
    id: "0",
    title: "title-0",
    tasks: ["0", "1"]
  },
  {
    id: "1",
    title: "title-1",
    tasks: ["2", "3"]
  },
  {
    id: "2",
    title: "title-2",
    tasks: ["4", "5"]
  },
  {
    id: "3",
    title: "title-3",
    tasks: ["6", "7"]
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.TASKS_GROUP_CREATE:
    return [...state, action.payload];
    default:
      return state;
  }
}
