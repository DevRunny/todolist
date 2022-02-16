import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const response = await axios.get("http://localhost:3001/todos");

    if (response) {
      const todos = await response.data;
      return { todos };
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    const response = await axios.post("http://localhost:3001/todos", {
      id: payload.id,
      title: payload.title,
      complete: payload.complete,
    });

    if (response) {
      const todo = await response.data;
      return { todo };
    }
  }
);

export const toggleCompleteAsync = createAsyncThunk(
  "todos/completeTodoAsync",
  async (payload) => {
    const response = await axios.patch(
      `http://localhost:3001/todos/${payload.id}`,
      {
        completed: payload.completed,
      }
    );

    if (response) {
      const todo = await response.data;
      return { todo };
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload) => {
    const response = await axios.delete(
      `http://localhost:3001/todos/${payload.id}`,
      {
        id: payload.id,
      }
    );

    if (response) {
      return { id: payload.id };
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    saveTodo: (state, action) => {
      const todo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },

    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },

    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload.todo);
    },
    [toggleCompleteAsync.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (todo) => todo.id === action.payload.todo.id
      );
      state[index].completed = action.payload.todo.completed;
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { saveTodo, setCheck, toggleComplete, deleteTodo } =
  todoSlice.actions;

export const selectTodoList = (state) => state.todos;

export default todoSlice.reducer;
