import { ACTIONS } from "../actions/actions";

const initialState = [
  {
    id: "0",
    title: "title-0"
  },
  {
    id: "1",
    title: "title-1"
  },
  {
    id: "2",
    title: "title-2"
  },
  {
    id: "3",
    title: "title-3"
  },
  {
    id: "4",
    title: "title-4"
  },
  {
    id: "5",
    title: "title-5"
  },
  {
    id: "6",
    title: "title-6"
  },
  {
    id: "7",
    title: "title-7"
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.TASK_CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
}
