import React, { Component } from "react";
import HeaderUI from "./widgets/HeaderUI";
import FilterUI from "./widgets/FilterUI";
import TodolistUI from "./widgets/TodolistUI";

export default class TodoUI extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <HeaderUI />
        </header>

        <div className="mt-2">
          <FilterUI />
        </div>

        <main className="mt-4">
          <TodolistUI />
        </main>
      </div>
    );
  }
}
