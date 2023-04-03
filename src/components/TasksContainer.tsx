import React, { useState } from "react";
import CustomButtom from "./Utils/CustomButtom";
import CustomSelect from "./Utils/CustomSelect";
import AddTaskModal from "./Tasks/AddTaskModal";

interface TasksContainerType extends React.PropsWithChildren {}

const TasksContainer: React.FC<TasksContainerType> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={"p-10"}>
      <div className={"flex justify-between items-center"}>
        <CustomButtom onClick={() => setModalOpen(true)}>
          + Add Task
        </CustomButtom>
        <CustomSelect
          selectLabel={"Order by"}
          values={[1, 2, 3]}
          labels={["um", "dois", "tres"]}
        />
      </div>
      <div>{children}</div>
      <AddTaskModal modalOpen={modalOpen} setModalOpen={setModalOpen} />{" "}
    </div>
  );
};

export default TasksContainer;
