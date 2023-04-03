import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
export interface TodoType {
  id: string;
  title: string;
  important: boolean;
  completed: boolean;
}

const getLocalTodos = (): TodoType[] => {
  const localTodoList = localStorage.getItem("todoList");
  if (localTodoList) return JSON.parse(localTodoList);

  return [];
};

const setLocalTodos = (todos: TodoType[]) => {
  localStorage.setItem("todoList", JSON.stringify(todos));
};

const initialValue = {
  todoList: getLocalTodos(),
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<TodoType, "id">>) => {
      const newTodo: TodoType = {
        id: uuid(),
        ...action.payload,
      };

      state.todoList.push(newTodo);

      setLocalTodos(state.todoList);
    },
    updateTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
  },
});

export const actions = todoSlice.actions;
export default todoSlice.reducer;
