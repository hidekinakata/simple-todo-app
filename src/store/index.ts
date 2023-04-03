import { todoSlice } from "./features/todos.store";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppControlSlice } from "./features/appControl.store";

const store = configureStore({
  reducer: {
    AppControl: AppControlSlice.reducer,
    todos: todoSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
