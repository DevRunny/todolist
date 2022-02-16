import React from "react";

import { useDispatch } from "react-redux";

import { toggleCompleteAsync, deleteTodoAsync } from "../features/todoSlice";

export const TodoItem = ({ title, completed, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(toggleCompleteAsync({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodoAsync({ id }));
  };

  return (
    <div
      className="todoItem"
      style={
        completed
          ? { backgroundColor: "rgb(0 191 255 / 50%)" }
          : { backgroundColor: "#ffffffb5" }
      }
    >
      <input
        className="todoItem__checkbox"
        type="checkbox"
        checked={completed}
        color="primary"
        onChange={handleCheck}
      />
      <input
        className={completed ? "todoItem--completed" : null}
        defaultValue={title}
      />
      <button className="todoItem__delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
};
