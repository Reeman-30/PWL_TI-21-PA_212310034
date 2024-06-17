import React from "react";

export default function HeaderUI() {
  return (
    <>
      <h1 className="text-center mt-3">Todo Search</h1>
      <div className="d-flex flex-row w-100">
        <input
          className="form-control"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
        <button type="button" className="btn btn-primary mx-3">
          Search
        </button>

        <a href="/input">
          <button type="button" className="btn btn-primary w-20 mx-3">
            Add new Todo
          </button>
        </a>
      </div>
    </>
  );
}
