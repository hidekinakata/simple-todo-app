import React, { useState } from "react";
import { VscAdd, VscClose } from "react-icons/vsc";
import CustomButtom from "../Utils/CustomButtom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";

type AddTaskModalType = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<boolean>;
};

const AddTaskModal: React.FC<AddTaskModalType> = ({
  modalOpen,
  setModalOpen,
}) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  const [important, setImportant] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, status, important });
  };

  return (
    <>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-900/50 backdrop-blur ">
          <div
            className={
              "max-w-lg w-11/12 my-0 mx-auto relative flex justify-center items-center p-8 rounded-lg bg-slate-200"
            }
          >
            <div
              className={
                "transition cursor-pointer absolute top-2 right-2 p-2 bg-red-700 hover:bg-red-500 text-md text-slate-200 rounded-lg"
              }
              onClick={() => setModalOpen(false)}
            >
              <VscClose className={"stroke-1"} />
            </div>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <h1 className={"text-xl text-slate-700 mb-4"}>Add Task</h1>
              <label htmlFor={"title"} className={"label"}>
                Title
                <input
                  id={"title"}
                  type={"text"}
                  required={true}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label htmlFor={"status"} className={"label"}>
                Status
                <select
                  id={"status"}
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value={"incomplete"}>Incomplete</option>
                  <option value={"complete"}>Complete</option>
                </select>
              </label>

              <div className={"label flex items-center mb-10"}>
                <div onClick={() => setImportant((prevState) => !prevState)}>
                  {important ? (
                    <AiFillStar
                      className={
                        "cursor-pointer w-6 h-6 text-yellow-500 ml-2 mr-2"
                      }
                    />
                  ) : (
                    <AiOutlineStar
                      className={
                        "cursor-pointer w-6 h-6 text-yellow-500 ml-2 mr-2"
                      }
                    />
                  )}
                </div>
                <span className={"select-none"}>Important</span>
              </div>

              <CustomButtom type={"submit"} className={"justify-self-end"}>
                Add Task!
              </CustomButtom>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTaskModal;
