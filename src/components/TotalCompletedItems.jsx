import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  return <h2>Всего выполненных заданий: {todos.length}</h2>;
};

export default TotalCompleteItems;
