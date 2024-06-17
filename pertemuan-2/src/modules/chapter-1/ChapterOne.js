import React, { Component } from "react";
import MessagerUI from "../widgets/messager/MessagerUI";

export default class ChapterOne extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center mb-4">Chapter One: The Begining</h1>
        <MessagerUI />
      </div>
    );
  }
}
