import React, { useState } from "react";
import CustomButtom from "./Utils/CustomButtom";
import OrderbyDropdown from "./Utils/OrderbyDropdown";
import AddTaskModal from "./Tasks/AddTaskModal";
import { OrderBy } from "../store/features/appControl.store";

interface TasksContainerType extends React.PropsWithChildren {}

const TasksContainer: React.FC<TasksContainerType> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={"py-10 px-[10%]"}>
      <div className={"grid grid-cols-[max-content_auto] gap-3 items-end mb-5"}>
        <CustomButtom onClick={() => setModalOpen(true)}>
          + Add To-do
        </CustomButtom>
        <OrderbyDropdown
          selectLabel={"Order by"}
          values={Object.values(OrderBy).filter((v) => Number(v) >= 0)}
          labels={
            Object.values(OrderBy).filter((v) => !(Number(v) >= 0)) as string[]
          }
        />
      </div>
      <div>{children}</div>
      <AddTaskModal modalOpen={modalOpen} setModalOpen={setModalOpen} />{" "}
    </div>
  );
};

export default TasksContainer;
