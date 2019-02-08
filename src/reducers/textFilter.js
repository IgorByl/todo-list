import * as constants from "../constants";

export default function textFilter(state = "", action) {
  if (action.type === constants.SET_TEXT_FILTER) {
    return action.payload;
  } else {
    return state;
  }
}
