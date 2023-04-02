import { createSlice } from "@reduxjs/toolkit";

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

export const todosStore = createSlice({
  name: "todos",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {},
    updateTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
  },
});

export const actions = todosStore.actions;
export default todosStore.reducer;
