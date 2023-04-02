import { useState } from "react";
import Header from "./components/Header";

function App() {
  return (
    <div
      className={
        "font-poppins w-screen h-screen bg-gradient-to-br from-green-100 to-purple-50 uppercase"
      }
    >
      <Header>The simple ToDo App!</Header>
    </div>
  );
}

export default App;
