import React, { Component } from "react";
import autobind from "react-auto-bind";
import { Client, getClientFormLabel, getUniqueId, isNull, isContainObj } from "helpers";
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
  componentDidUpdate (prevProps, prevState) {
    const { editableClient } = this.props;
    if(!isNull(editableClient) && !Object.is(prevProps.editableClient, editableClient)){
      if(!isContainObj(editableClient, prevState)){
        const { id, name, email, phone } = editableClient;
        this.setState({ id, name, email, phone });
      }
    }
  }
  
  onChange(e) {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }
  clearRows() {
    this.setState({
      id: null,
      name: "",
      email: "",
      phone: ""
    });
  }
  onSave(e) {
    e.preventDefault();
    const { ...clientForm } = this.state;
    const { onSaveClient, onToggleFormShow } = this.props;
    const clients = JSON.parse(localStorage.getItem("tableContent"));
    if (!isNull(clientForm.id)) {
      const editClients = clients.map(client => {
        if (client.id === clientForm.id) {
          return { ...client, ...clientForm };
        }
        return client;
      });
      onSaveClient(editClients);
    } else {
      const { id, ...clientFormRows } = clientForm;
      onSaveClient([
        { ...new Client(getUniqueId(clients)), ...clientFormRows },
        ...clients
      ]);
    }
    this.clearRows()
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
    return (
      <ClientFormView
        formRows={formRows}
        onChange={this.onChange}
        onSave={this.onSave}
      />
    );
  }
}

export default ClientForm;
