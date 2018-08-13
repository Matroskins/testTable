import React, { Component } from "react";
import autobind from "react-auto-bind";
import {isNull} from 'helpers'
import MainView from "./View/Main";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editableClient: null,
      isShowForm: false
    };
    autobind(this);
  }
  toggleFormShow() {
    this.setState(prevState => {
      if(prevState.isShowForm && !isNull(prevState.editableClient)){
        return { isShowForm: !prevState.isShowForm, editableClient: null }
      }
      return { isShowForm: !prevState.isShowForm };
    });
  }
  handleEditClient(id) {
    const {isShowForm} = this.state
    this.setState((prevState, props) => {
      const tableContent = JSON.parse(localStorage.getItem("tableContent"));
      return { editableClient: tableContent.find(client => client.id === id) };
    });
    if(!isShowForm){
      this.toggleFormShow();
    }
  }

  handleChangeClients(newClients){
    localStorage.setItem("tableContent", JSON.stringify(newClients));
  }

  render() {
    const { isShowForm, editableClient } = this.state;
    return (
      <MainView
        isShowForm={isShowForm}
        handleChangeClients={this.handleChangeClients}
        editableClient={editableClient}
        onEditClient={this.handleEditClient}
        onToggleFormShow={this.toggleFormShow}
      />
    );
  }
}

export default Main;
