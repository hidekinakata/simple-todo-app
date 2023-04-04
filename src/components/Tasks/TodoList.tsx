import React from "react";
import TodoItem from "./TodoItem";
import { useAppDispatch, useAppSelector } from "../../store";
import { TodoType } from "../../store/features/todos.store";
import { actions as AppControl } from "../../store/features/appControl.store";

type TaskListType = { todos?: TodoType[] };

const TodoList: React.FC<TaskListType> = ({ todos }) => {
  const dispatch = useAppDispatch();
  const setModalOpen = (open: boolean) => {
    dispatch(AppControl.setModalOpen(open));
  };
  return (
    <ul
      className={
        "bg-gradient-to-br from-pink-300 to-purple-300 rounded p-3 flex flex-col gap-3"
      }
    >
      {todos && todos.length > 0 ? (
        todos.map((t) => <TodoItem todo={t} key={t.id} />)
      ) : (
        <li
          className={
            "transition rounded border-2 border-white border-dashed p-4 text-white  text-center bg-pink-300/50 hover:bg-pink-100 hover:text-pink-700 hover:border-pink-500 cursor-pointer"
          }
          onClick={() => setModalOpen(true)}
        >
          Add new To-do
        </li>
      )}
    </ul>
  );
};

export default TodoList;
