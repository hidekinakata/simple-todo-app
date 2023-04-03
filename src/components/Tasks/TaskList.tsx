import React from "react";
import TaskItem from "./TaskItem";
import { useAppSelector } from "../../store";

type TaskListType = {};

const TaskList: React.FC<TaskListType> = (props) => {
  const todos = useAppSelector((state) => state.todos.todoList);
  return (
    <ul>
      {todos.map((t) => (
        <TaskItem todo={t} key={t.id} />
      ))}
    </ul>
  );
};

export default TaskList;
