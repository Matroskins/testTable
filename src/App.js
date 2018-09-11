//flow
import React, { Component } from 'react';
import Main from './components/Main/Main'
import './App.css';

class App extends Component {
  componentDidMount() {
    const data = [
      {
        id: 111,
        name: "Ivan",
        phone: "+33333333",
        email: "answear@mail.ru",
        lastVisit: '',
        paySumm: '',
        visitedNum: '',
        isActive: ''
      },
      {
        id: 222,
        name: "Vi",
        phone: "+666666",
        email: "Vit@mail.ru",
        lastVisit: '',
        paySumm: '',
        visitedNum: '',
        isActive: ''
      }
    ];
    localStorage.setItem("tableContent", JSON.stringify(data));
  }

  render() {
    return (
      <Main />
    );
  }
}

export default App;
