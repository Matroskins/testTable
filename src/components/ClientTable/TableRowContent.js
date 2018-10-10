// @flow

import React, { Component } from "react";
import autobind from "react-auto-bind";
import type { clientTypeRow } from "helpers/types.js";
import TableRowView from "./View/TableRowContent";

type tableRowContentType = {
  data: clientTypeRow,
  id: number,
  onEdit: number => void,
  onDelete: number => void
};
class TableRowContent extends Component<tableRowContentType, {}> {
  constructor(props: tableRowContentType) {
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
