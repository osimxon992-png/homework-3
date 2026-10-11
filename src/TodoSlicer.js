import { createSlice } from "@reduxjs/toolkit";

let TodoSlicer = createSlice({
  name: "todo",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({
        id: Date.now(),
        title: action.payload,
      });
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
  },
});

export let { addTodo, removeTodo } = TodoSlicer.actions;
export default TodoSlicer.reducer;
