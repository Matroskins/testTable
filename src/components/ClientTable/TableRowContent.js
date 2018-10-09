// @flow

import React, { Component } from "react";
import autobind from "react-auto-bind";
import TableRowView from "./View/TableRowContent";

class TableRowContent extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  deleteRow() {
    const { id, onDelete } = this.props;
    onDelete(id);
  }
  editRow() {
    const { id, onEdit } = this.props;
    onEdit(id);
  }
  render() {
    const { deleteRow, editRow } = this;
    const { data } = this.props;
    return <TableRowView data={data} onEdit={editRow} onDelete={deleteRow} />;
  }
}

export default TableRowContent;
