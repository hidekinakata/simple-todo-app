import React, {
  FocusEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import { actions, TodoType } from "../../store/features/todos.store";
import {
  FaCheck,
  FaRegEdit,
  FaRegStar,
  FaRegTrashAlt,
  FaStar,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Simulate } from "react-dom/test-utils";
import submit = Simulate.submit;
import { VscClose } from "react-icons/vsc";

type TaskItemType = {
  todo: TodoType;
};

const TodoItem: React.FC<TaskItemType> = ({ todo }) => {
  const dispatch = useDispatch();
  const formInputRef = useRef<HTMLFormElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);

  const [titleInput, setTitleInput] = useState("");
  const [editing, setEditing] = useState(false);
  const [needConfirm, setNeedConfirm] = useState(true);

  const handleEditEnable = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(`Editing todo: ${todo.id}...`);
    setEditing(true);
    setTimeout(() => {
      if (titleInputRef.current) {
        console.log(`focus todo: ${todo.id}...`);
        titleInputRef.current.focus();
      }
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { title, ...others } = todo;
    dispatch(
      actions.updateTodo({
        title: titleInput,
        ...others,
      })
    );
    setEditing(false);
  };

  const handleComplete = (e: React.MouseEvent<any>) => {
    e.preventDefault();
    const { completed, ...others } = todo;
    dispatch(
      actions.updateTodo({
        completed: !completed,
        ...others,
      })
    );
  };

  const handleImportant = (e: React.MouseEvent<any>) => {
    e.preventDefault();
    const { important, ...others } = todo;
    dispatch(
      actions.updateTodo({
        important: !important,
        ...others,
      })
    );
  };

  const handleDelete = (e: React.MouseEvent<any>) => {
    e.preventDefault();
    if (needConfirm) {
      setNeedConfirm(false);
      setTimeout(() => {
        setNeedConfirm(true);
      }, 2e3);
    } else {
      dispatch(actions.deleteTodo(todo));
    }
  };

  return (
    <li
      className={
        "transition bg-pink-100 rounded p-4 border grid grid-cols-[auto_4rem] "
      }
    >
      <div
        className={
          "grid grid-cols-[max-content_max-content_auto] gap-2 sm:gap-3 items-center"
        }
      >
        {todo.important ? (
          <FaStar
            className={"text-yellow-400 text-lg sm:text-xl hover:scale-105"}
            onClick={handleImportant}
          />
        ) : (
          <FaRegStar
            className={"text-slate-800/20 text-lg sm:text-xl"}
            onClick={handleImportant}
          />
        )}
        <FaCheck
          className={`text-lg sm:text-xl ${
            todo.completed ? "text-green-400" : "text-slate-800/20"
          }`}
          onClick={handleComplete}
        />

        <h1
          className={
            " text-slate-800 text-ellipsis overflow-hidden  select-none"
          }
        >
          <span
            onClick={handleEditEnable}
            className={`text-ellipsis overflow-hidden p-1 ${
              !editing ? "block" : "hidden"
            }`}
          >
            {todo.title}
          </span>
          <form
            ref={formInputRef}
            onSubmit={handleSubmit}
            className={"relative"}
          >
            <input
              ref={titleInputRef}
              required={true}
              className={`bg-white w-full rounded p-1 ${
                editing ? "" : "hidden"
              }`}
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              onBlur={(e) => setEditing(false)}
            />
            <VscClose
              className={`absolute top-1/2 -translate-y-1/2 right-3 hover:scale-110 hover:text-red-500 cursor-pointer ${
                editing ? "" : "hidden"
              }`}
              onClick={(e) => setEditing(false)}
            />
          </form>
        </h1>
      </div>

      <div
        className={
          "flex justify-end items-center gap-3 text-slate-700 relative"
        }
      >
        <FaRegTrashAlt className={"cursor-pointer "} onClick={handleDelete} />
        {!needConfirm && (
          <span
            className={`p-1 text-center rounded text-[0.5rem] bg-pink-200 text-red-500 absolute -right-3 translate-x-full 
             before:content-[''] before:absolute before:w-0 before:h-0 before:right-full before:top-1/2 before:-translate-y-1/2 before:border-8 before:border-transparent before:border-r-pink-200 `}
          >
            Click again to confirm
          </span>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
