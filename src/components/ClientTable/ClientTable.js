// @flow

import React, { Component } from "react";
import autobind from "react-auto-bind";
import { compareArrays, getColumnsAliases, Client } from "helpers";
import type { clientType } from "helpers";
import ClientTableView from "./View/ClientTable";

type stateType = {
  tableContent: Array<clientType>,
  isAdded: boolean
};
type propsType = { onEditClient: number => void };
class ClientTable extends Component<propsType, stateType> {
  constructor(props: propsType) {
    super(props);
    this.state = {
      tableContent: [],
      isAdded: false
    };
    autobind(this);
  }

  componentDidMount() {
    this.setState({
      tableContent: JSON.parse(localStorage.getItem("tableContent") || "{}"),
      isAdded: true
    });
  }

  componentDidUpdate() {
    const { tableContent } = this.state;
    const tableContentStorage =
      JSON.parse(localStorage.getItem("tableContent") || "{}") || [];
    if (!compareArrays(tableContent, tableContentStorage)) {
      this.setState({ tableContent: tableContentStorage });
    }
  }

  deleteClient(id: number) {
    const { tableContent } = this.state;
    const newTableContent =
      tableContent.length > 0
        ? tableContent.filter(client => client.id !== id)
        : [];
    localStorage.setItem("tableContent", JSON.stringify(newTableContent));
    this.setState({ tableContent: newTableContent });
  }

  render() {
    const { onEditClient } = this.props;
    const { tableContent, isAdded } = this.state;
    const { id, ...allColumns } = new Client(0);
    const columnsAliases = ["", ...Object.keys(allColumns)];
    const tableDataWithTitles = {
      tableColumns: getColumnsAliases(columnsAliases),
      tableContent
    };
    return isAdded ? (
      <ClientTableView
        tableData={tableDataWithTitles}
        onEdit={onEditClient}
        onDelete={this.deleteClient}
      />
    ) : (
      <div />
    );
  }
}

export default ClientTable;
