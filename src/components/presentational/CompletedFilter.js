import React, { Fragment } from "react";
import PropTypes from "prop-types";

const CompletedFilter = ({ showAll, showCompleted, showIncompleted }) => (
  <Fragment>
    <button onClick={showAll}>All</button>
    <button onClick={showCompleted}>Completed</button>
    <button onClick={showIncompleted}>Incompleted</button>
  </Fragment>
);

CompletedFilter.propTypes = {
  showAll: PropTypes.func.isRequired,
  showCompleted: PropTypes.func.isRequired,
  showIncompleted: PropTypes.func.isRequired
};

export default CompletedFilter;
