import React, { Component } from "react";
import autobind from "react-auto-bind";
import { Client, getClientFormLabel, getUniqueId, isNull } from "helpers";
import ClientFormView from "./View/ClientForm";

class ClientForm extends Component {
  constructor(props: Props) {
    super((props: Props));
    autobind(this);
  }
  state = {
    id: null,
    name: "",
    email: "",
    phone: ""
  };
  componentDidMount() {
    const { editableClient } = this.props;
    if (!isNull(editableClient)) {
      const { id, name, email, phone } = editableClient;
      this.setState({ id, name, email, phone });
    }
  }
  handleChange(e) {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }
  handleClearRows() {
    this.setState({
      id: null,
      name: "",
      email: "",
      phone: ""
    });
  }
  handleSave(e) {
    e.preventDefault();
    const { ...clientForm } = this.state;
    const { onSaveClients, onToggleFormShow } = this.props;
    const clients = JSON.parse(localStorage.getItem("tableContent"));
    if (!isNull(clientForm.id)) {
      const editClients = clients.map(client => {
        if (client.id === clientForm.id) {
          return { ...client, ...clientForm };
        }
        return client;
      });
      onSaveClients(editClients);
    } else {
      const { id, ...clientFormRows } = clientForm;
      onSaveClients([
        { ...new Client(getUniqueId(clients)), ...clientFormRows },
        ...clients
      ]);
    }
    this.handleClearRows()
    onToggleFormShow();
  }
  render() {
    const { id, ...clientFormRows } = this.state;
    const formRows = Object.keys(clientFormRows).reduce(
      (formatedArray, key) => [
        ...formatedArray,
        {
          id: `client form ${key}`,
          label: getClientFormLabel(key),
          name: key,
          value: clientFormRows[key]
        }
      ],
      []
    );
    debugger;
    return (
      <ClientFormView
        formRows={formRows}
        onChange={this.handleChange}
        onSave={this.handleSave}
      />
    );
  }
}

export default ClientForm;
