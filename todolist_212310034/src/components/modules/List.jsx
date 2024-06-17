import React from "react";

export default function List({ items }) {
  return (
    <div className="container w-75 ">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Todo</th>
            <th scope="col">Method</th>
          </tr>
        </thead>
        <tbody>
          {items.map((value, index) => (
            <tr>
              <th key={index}>{index + 1}</th>
              <td>
                <span
                  style={
                    value.checked ? { textDecoration: "line-through" } : {}
                  }
                >
                  {value.item}
                </span>
              </td>
              <td>
                <input
                  type="checkbox"
                  name="check"
                  style={{ marginRight: 20 }}
                />
                <button type="button" className="btn btn-sm btn-success mx-2">
                  Edit
                </button>
                <button type="button" className="btn btn-sm btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
