import React from 'react';
import {connect} from 'react-redux';
import Summary from '../presentational/Summary';
import * as selectors from '../../selectors'

const SummaryContainer = ({todos}) => {
    return(
    <Summary  summaryCount={todos.length}
    completedCount={todos.filter(item => item.isCompleted).length}
    />)
}

export default connect(state => ({todos:selectors.selectTodos(state)}))(SummaryContainer)