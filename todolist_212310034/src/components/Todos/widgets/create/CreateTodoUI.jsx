import React, { useState } from "react";
import { Data } from "../../../data/Data";

export default function CreateTodoUI() {
  const [tasks, setTasks] = useState(Data);
  const [text, setText] = useState("");
  return (
    <div className="container">
      <h1 className="text-center ">Todo Input</h1>

      <div className="mt-2">
        <input
          type="text"
          class="form-control"
          placeholder="Create To Do List"
        />
        <button className="btn btn-primary mt-4">Create new To Do List</button>

        <a href="/">
          <button className="btn btn-primary mt-4 mx-4">Back to home</button>
        </a>
      </div>
    </div>
  );
}
