// @flow

import React, { Component } from "react";
import autobind from "react-auto-bind";
import {
  Client,
  getClientFormLabel,
  getUniqueId,
  isNull,
  isContainObj
} from "helpers";
import type { clientType } from "helpers";
import ClientFormView from "./View/ClientForm";

type clientFormProps = {
  isShowForm: boolean,
  onSaveClient: (Array<clientType>) => void,
  editableClient: ?clientType,
  onToggleFormShow: Function
};
type clientFormState = {
  id: ?number,
  name: string,
  email: string,
  phone: string
};
class ClientForm extends Component<clientFormProps, clientFormState> {
  constructor(props: clientFormProps) {
    super((props: clientFormProps));
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
    if (!isNull(editableClient) && editableClient) {
      const { id, name, email, phone } = editableClient;
      this.setState({ id, name, email, phone });
    }
  }
  componentDidUpdate(prevProps: clientFormProps, prevState: clientFormState) {
    const { editableClient } = this.props;
    if (
      !isNull(editableClient) &&
      !Object.is(prevProps.editableClient, editableClient) &&
      editableClient
    ) {
      if (!isContainObj(editableClient, prevState)) {
        const { id, name, email, phone } = editableClient;
        this.setState({ id, name, email, phone });
      }
    }
  }

  onChange(e: SyntheticInputEvent<any>) {
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
  onSave(e: SyntheticEvent<>) {
    e.preventDefault();
    const { ...clientForm } = this.state;
    const { onSaveClient, onToggleFormShow } = this.props;
    const clients = JSON.parse(localStorage.getItem("tableContent") || "{}");
    if (!isNull(clientForm.id)) {
      const editClients = clients.map((client: clientType) => {
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
    this.clearRows();
    onToggleFormShow();
  }
  render() {
    const { id, ...clientFormRows } = this.state;
    const { isShowForm } = this.props;
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
        isShowForm={isShowForm}
        formRows={formRows}
        onChange={this.onChange}
        onSave={this.onSave}
      />
    );
  }
}

export default ClientForm;
