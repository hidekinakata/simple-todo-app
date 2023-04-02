import React from "react";
import { VscAdd, VscClose } from "react-icons/vsc";
import CustomButtom from "../Utils/CustomButtom";

type AddTaskModalType = {};

const AddTaskModal: React.FC<AddTaskModalType> = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-900/50 backdrop-blur ">
      <div
        className={
          "max-w-lg w-11/12 my-0 mx-auto relative flex justify-center items-center p-8 rounded-lg bg-slate-200"
        }
      >
        <div
          className={
            "absolute top-2 right-2 p-2 bg-red-900 text-md text-slate-200 rounded-lg"
          }
        >
          <VscClose className={"stroke-1"} />
        </div>
        <form className="form">
          <h1 className={"text-xl text-slate-700 mb-4"}>Add Task</h1>
          <label htmlFor={"title"} className={"label"}>
            Title
            <input id={"title"} type={"text"} required={true} />
          </label>
          <label htmlFor={"status"} className={"label"}>
            Status
            <select id={"status"}>
              <option>Incomplete</option>
              <option>Complete</option>
            </select>
          </label>

          <CustomButtom type={"submit"} className={"justify-self-end"}>
            Add Task!
          </CustomButtom>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
