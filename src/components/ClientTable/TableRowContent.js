import React, { Component } from "react";
import autobind from "react-auto-bind";
import TableRowView from "./View/TableRowContent";

class TableRowContent extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  handleDeleteRow() {
    const { id, onDelete } = this.props;
    onDelete(id);
  }
  handleEditRow() {
    const { id, onEdit } = this.props;
    onEdit(id);
  }
  render() {
    const { handleDeleteRow, handleEditRow } = this;
    const {data} = this.props
    return (
      <TableRowView
        data={data}
        onEdit={handleEditRow}
        onDelete={handleDeleteRow}
      />
    );
  }
}

export default TableRowContent;
