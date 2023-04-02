import React from "react";
import TaskItem from "./TaskItem";

type TaskListType = {};

const TaskList: React.FC<TaskListType> = (props) => {
  return (
    <ul>
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </ul>
  );
};

export default TaskList;
