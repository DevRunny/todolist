import React from "react";
import Input from "./Input";
import TotalCompleteItems from "./TotalCompletedItems";
import { TodoItem } from "./TodoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "../features/todoSlice";

export const MyTodoList = () => {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="container">
      <Input />
      <div className="todoContainer">
        {todoList.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            completed={item.completed}
            id={item.id}
          />
        ))}
      </div>
      <TotalCompleteItems />
      <p>
        Данные запрашиваются с локального файла db.json, через json-server
        http://localhost:3001/todos/
      </p>
    </div>
  );
};
