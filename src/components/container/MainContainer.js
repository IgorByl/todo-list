import React, { Fragment } from "react";
import InputContainer from "../container/InputContainer";
import TodoItemListContainer from "./TodoItemListContainer";
import CompletedFilterContainer from "../container/CompletedFilterContainer";
import SummaryContainer from "./SummaryContainer";

const App = () => {
  return (
    <Fragment>
      <InputContainer />
      <CompletedFilterContainer />
      <TodoItemListContainer />
      <SummaryContainer />
    </Fragment>
  );
};

export default App;