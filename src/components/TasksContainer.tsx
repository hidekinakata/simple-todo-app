import React from "react";
import CustomButtom from "./Utils/CustomButtom";
import CustomSelect from "./Utils/CustomSelect";

interface TasksContainerType extends React.PropsWithChildren {}

const TasksContainer: React.FC<TasksContainerType> = ({ children }) => {
  return (
    <div className={"p-10"}>
      <div className={"flex justify-between items-center"}>
        <CustomButtom>+ Add Task</CustomButtom>
        <CustomSelect
          selectLabel={"Order by"}
          values={[1, 2, 3]}
          labels={["um", "dois", "tres"]}
        />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TasksContainer;
