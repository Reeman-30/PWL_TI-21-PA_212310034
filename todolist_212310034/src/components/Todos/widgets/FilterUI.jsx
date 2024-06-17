import React from "react";

export default function FilterUI() {
  return (
    <div>
      <h1 className="text-center">TodoList Filter</h1>

      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center w-50">
          <button className="btn btn-primary mx-2 w-25">All</button>
          <button className="btn btn-primary mx-2 w-25">Done</button>
          <button className="btn btn-primary mx-2 w-25">Todo</button>
        </div>
      </div>
    </div>
  );
}
