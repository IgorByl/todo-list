import * as constants from "../constants";

const initialState = constants.completedFilterDictionary.showAll;

export default function CompletedFilter(state = initialState, action) {
  switch (action.type) {
    case constants.SHOW_ALL:
      return constants.completedFilterDictionary.showAll;
    case constants.SHOW_COMPLETED:
      return constants.completedFilterDictionary.showCompleted;
    case constants.SHOW_INCOMPLETED:
      return constants.completedFilterDictionary.showIncompleted;
    default:
      return state;
  }
}
