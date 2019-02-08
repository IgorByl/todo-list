import React, {Component} from "react";
import TodoItemContainer from "./TodoItemContainer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../actions";
import * as selectors from '../../selectors';


class TodoItemListContainer extends Component {
    toggleCompletedHandler = (id) => {
        this.props.toggleTodo(id);
    };

    addTodoItemHandler = (id) => {
        this.props.addTodo(id);
    };

    removeTodoItemHandler = (id) => {
        this.props.removeTodo(id);
    };

    editTodoItemHandler = (id, text) => {
        this.props.editTodo(id, text);
    };

    render() {
        return (
            this.props.filteredTodos.map(
                (todoItem) =>
                    <TodoItemContainer
                        key={todoItem.id}
                        todoItem={todoItem}
                        addTodoItemHandler={(evt) => this.addTodoItemHandler(todoItem.id, evt.target.value)}
                        toggleCompletedHandler={(evt) => this.toggleCompletedHandler(todoItem.id, evt.target.value)}
                        removeTodoItemHandler={(evt) => this.removeTodoItemHandler(todoItem.id, evt.target.value)}
                        editTodoItemHandler={(evt) => this.editTodoItemHandler(todoItem.id, evt.target.value)}
                    />
            )
        )
    }
}


TodoItemListContainer.propTypes = {
    filteredTodos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
    filteredTodos: selectors.selectFilteredTodos(state),
  });
  
  export default connect(
    mapStateToProps,
    {
      addTodo: actions.addTodo,
      removeTodo: actions.removeTodo,
      editTodo: actions.editTodo,
      toggleTodo: actions.toggleTodo
    }
  )(TodoItemListContainer);