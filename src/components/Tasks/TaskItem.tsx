import React from "react";
import { TodoType } from "../../store/features/todos.store";

type TaskItemType = {
  todo: TodoType;
};

const TaskItem: React.FC<TaskItemType> = ({ todo }) => {
  return <li>{todo.title}</li>;
};

export default TaskItem;
