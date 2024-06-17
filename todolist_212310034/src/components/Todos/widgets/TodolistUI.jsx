import React from "react";
import List from "../../modules/List";
import { Data } from "../../data/Data";

export default function TodolistUI() {
  return (
    <div>
      <List items={Data} />

      <div className="d-flex justify-content-around mb-5">
        <button className="btn btn-danger">Delete done Tasks</button>
        <button className="btn btn-danger">Delete all Tasks</button>
      </div>
    </div>
  );
}
