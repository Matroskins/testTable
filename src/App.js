// @flow

import React, { Component } from "react";
import Main from "./components/Main/Main";

class App extends Component {
  componentDidMount() {
    const data = [
      {
        id: 111,
        name: "Ivan",
        phone: "+33333333",
        email: "answer@mail.ru",
        lastVisit: "",
        paySum: "",
        visitedNum: "",
        isActive: ""
      },
      {
        id: 222,
        name: "Vi",
        phone: "+666666",
        email: "Vit@mail.ru",
        lastVisit: "",
        paySum: "",
        visitedNum: "",
        isActive: ""
      }
    ];
    localStorage.setItem("tableContent", JSON.stringify(data));
  }

  render() {
    return <Main />;
  }
}

export default App;
