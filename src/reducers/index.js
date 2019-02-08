import {combineReducers} from 'redux';
import todo from './todo';
import completedFilter from './copletedFilter';
import textFilter from './textFilter';

const reduser = combineReducers({
	todo,
	completedFilter,
	textFilter
})

export default reduser