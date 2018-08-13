//flow
import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './components/Main/Main'
import './App.css';

class App extends Component {
  componentDidMount() {
    const data = [
      {
        id: 111,
        name: "Ivan",
        email: "answear@mail.ru",
        phone: "+33333333",
        lastVisit: '',
        paySumm: '',
        visitedNum: '',
        isActive: ''
      },
      {
        id: 222,
        name: "Vi",
        email: "Vit@mail.ru",
        phone: "+666666",
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
