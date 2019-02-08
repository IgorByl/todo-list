import { connect } from "react-redux";
import CompletedFilter from "../presentational/CompletedFilter";
import * as actions from "../../actions";

export default connect(
  null,
  {
    showAll: actions.showAll,
    showCompleted: actions.showCompleted,
    showIncompleted: actions.showIncompleted
  }
)(CompletedFilter);
