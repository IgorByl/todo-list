import { selectCompletedFilter } from "./completedFilter";
import { completedFilterDictionary } from "../constants";
import {selectTextFilter} from './textFilter';

export const selectTodos = state => state.todo;


export const selectFilteredTodos = state => {
  const currentFilter = selectCompletedFilter(state);
  const currentTextFilter = selectTextFilter(state);
  return selectTodos(state).filter(todo => {
    switch (currentFilter) {
      case completedFilterDictionary.showCompleted:
        return todo.isCompleted;
      case completedFilterDictionary.showIncompleted:
        return !todo.isCompleted;
        default: return todo;
    }
  })
  .filter(todo => !todo.text.includes(currentTextFilter))
};
