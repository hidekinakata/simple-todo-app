import React from "react";
import TodoItem from "./TodoItem";
import { useAppSelector } from "../../store";
import { TodoType } from "../../store/features/todos.store";

type TaskListType = { todos?: TodoType[] };

const TodoList: React.FC<TaskListType> = ({ todos }) => {
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
            "rounded border-2 border-white border-dashed p-4 text-white text-center"
          }
        >
          Add new To-do
        </li>
      )}
    </ul>
  );
};

export default TodoList;
