import React, { Component } from "react";
import Input from "./../presentational/Input";
import { connect } from "react-redux";
import * as actions from "../../actions";

class InputContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  addItemHandler = () => {
    this.props.dispatch(actions.addTodo(this.state.text));
  };

  handleChange = event => {
    this.setState({ text: event.target.value }, () => {
      this.props.dispatch(actions.setTextFilter(this.state.text));
    });
  };

  handleKeyPress = event => {
    if (this.state.text && event.charCode === 13) {
      this.props.dispatch(actions.addTodo(this.state.text));
    }
  };

  clearInputHandler = () => {
    this.setState({ text: "" });
    this.props.dispatch(actions.setTextFilter(""));
  };

  render() {
    return (
      <Input
        value={this.state.text}
        onKeyPress={this.handleKeyPress}
        handleChange={this.handleChange}
        addItemHandler={this.addItemHandler}
        clearInputHandler={this.clearInputHandler}
      />
    );
  }
}

export default connect()(InputContainer);
