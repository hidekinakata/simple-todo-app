import { useEffect, useState } from "react";
import Header from "./components/Header";
import TasksContainer from "./components/TasksContainer";
import TodoList from "./components/Tasks/TodoList";
import AddTaskModal from "./components/Tasks/AddTaskModal";
import { useAppSelector } from "./store";
import { OrderBy } from "./store/features/appControl.store";
import { TodoType } from "./store/features/todos.store";

function App() {
  const todos = useAppSelector((state) => state.todos.todoList);
  const orderBy = useAppSelector((state) => state.AppControl.orderBy);
  const [mappedTodos, setMappedTodos] = useState(todos);

  useEffect(() => {
    let sorted: TodoType[] = todos.map((t) => t);
    console.log(orderBy);
    switch (orderBy.order) {
      case OrderBy.Insertion:
        sorted = orderBy.asc ? sorted.reverse() : sorted;
        break;
      case OrderBy.Alphabetical:
        sorted = sorted.sort((a, b) => {
          let compare = a.title.toLowerCase() > b.title.toLowerCase();
          compare = orderBy.asc ? compare : !compare;
          return compare ? 1 : -1;
        });
        break;
      case OrderBy.Complete:
        const completed = sorted.filter((t) => t.completed);
        const uncompleted = sorted.filter((t) => !t.completed);
        sorted = orderBy.asc
          ? [...uncompleted, ...completed]
          : [...completed, ...uncompleted];
        break;
      case OrderBy.Important:
        const important = sorted.filter((t) => t.important);
        const notImportant = sorted.filter((t) => !t.important);
        sorted = orderBy.asc
          ? [...notImportant, ...important]
          : [...important, ...notImportant];

        break;
    }
    setMappedTodos(sorted);
  }, [orderBy, todos]);

  return (
    <div
      className={
        "font-poppins w-screen h-screen bg-gradient-to-tl from-slate-100 via-fuchsia-50 to-purple-300"
      }
    >
      <Header>The simple ToDo App!</Header>
      <TasksContainer>
        <TodoList todos={mappedTodos} />
      </TasksContainer>
    </div>
  );
}

export default App;
