import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoUI from "./components/Todos/TodoUI";
import CreateTodoUI from "./components/Todos/widgets/create/CreateTodoUI";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <React.Suspense>
        <Routes>
          <Route index element={<TodoUI />} />
          <Route path="input" element={<CreateTodoUI />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
