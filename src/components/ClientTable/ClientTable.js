import React, { Component } from "react";
import autobind from "react-auto-bind";
import { compareArrays, getColumnsAliases, Client } from 'helpers'
import ClientTableView from "./View/ClientTable";

class ClientTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableContent: [],
      isAdded: false
    };
    autobind(this);
  }

  componentDidMount() {
    this.setState({
      tableContent: JSON.parse(localStorage.getItem("tableContent")),
      isAdded: true
    });
  }

  componentDidUpdate () {
    const { tableContent } = this.state
    const tableContentStorage = JSON.parse(localStorage.getItem("tableContent"))
    if(!compareArrays(tableContent, tableContentStorage)){
      this.setState({tableContent: tableContentStorage})
    }
  }

  handleDeleteClient(id) {
    const {tableContent} = this.state
    const newTableContent = tableContent.filter(client => client.id !== id)
    localStorage.setItem("tableContent", JSON.stringify(newTableContent));
    this.setState({tableContent: newTableContent})
  }

  render() {
    const {onEditClient, tableColumns} = this.props
    const { tableContent, isAdded } = this.state;
    const {id, ...allColumns} = new Client(0) 
    const columnsAliases = ["", ...Object.keys(allColumns)]
    const tableDataWithTitles = {
      tableColumns: getColumnsAliases(columnsAliases),
      tableContent
    };
    debugger;
    return isAdded ? (
      <ClientTableView
        tableData={tableDataWithTitles}
        onEdit={onEditClient}
        onDelete={this.handleDeleteClient}
      />
    ) : (
      <div />
    );
  }
}

export default ClientTable;
