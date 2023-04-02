import { useState } from "react";
import Header from "./components/Header";
import TasksContainer from "./components/TasksContainer";
import TaskList from "./components/Tasks/TaskList";
import AddTaskModal from "./components/Tasks/AddTaskModal";

function App() {
  return (
    <div
      className={
        "font-poppins w-screen h-screen bg-gradient-to-tl from-slate-100 via-fuchsia-50 to-purple-300"
      }
    >
      <Header>The simple ToDo App!</Header>
      <TasksContainer>
        <TaskList />
      </TasksContainer>

      <AddTaskModal />
    </div>
  );
}

export default App;
