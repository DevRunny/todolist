import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { addTodoAsync, getTodosAsync } from "../features/todoSlice";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const addTodo = () => {
    if (input !== "") {
      dispatch(
        addTodoAsync({
          title: input,
          completed: false,
          id: Date.now(),
        })
      );

      setInput("");
    } else {
      return;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Время для новых задач..."
      />
      <button onClick={addTodo}>+</button>
    </div>
  );
};

export default Input;
