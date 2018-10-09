// @flow

import React, { Component } from "react";
import autobind from "react-auto-bind";
import { isNull } from "helpers";
import type { clientType } from "helpers";
import MainView from "./View/Main";

type stateType = {
  editableClient: ?clientType,
  isShowForm: boolean
};
class Main extends Component<any, stateType> {
  constructor() {
    super();
    this.state = {
      editableClient: null,
      isShowForm: false
    };
    autobind(this);
  }
  toggleFormShow() {
    this.setState((prevState: stateType) => {
      if (prevState.isShowForm && !isNull(prevState.editableClient)) {
        return { isShowForm: !prevState.isShowForm, editableClient: null };
      }
      return { isShowForm: !prevState.isShowForm };
    });
  }
  editClient(id: number) {
    const { isShowForm } = this.state;
    const tableContentlocalSt = localStorage.getItem("tableContent");
    const tableContent = tableContentlocalSt
      ? JSON.parse(tableContentlocalSt)
      : [];
    const editableClient = tableContent.find(client => client.id === id);

    if (!isShowForm) {
      this.toggleFormShow();
    }
    this.setState({
      editableClient
    });
  }
  changeClients(newClients: Array<clientType>) {
    localStorage.setItem("tableContent", JSON.stringify(newClients));
  }

  render() {
    const { isShowForm, editableClient } = this.state;
    return (
      <MainView
        isShowForm={isShowForm}
        changeClients={this.changeClients}
        editableClient={editableClient}
        onEditClient={this.editClient}
        onToggleFormShow={this.toggleFormShow}
      />
    );
  }
}

export default Main;
