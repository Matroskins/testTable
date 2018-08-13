import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { commentEmptyColumns } from "helpers";

const TableRowContent = ({ data, onEdit, onDelete }) => {
  return (
    <TableRow>
      <TableCell>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onEdit}>Edit</button>
      </TableCell>
      <Fragment>
        {Object.keys(data).map(key => (
          <TableCell key={key} component="th" scope="row">
            {commentEmptyColumns(data[key])}
          </TableCell>
        ))}
      </Fragment>
    </TableRow>
  );
};

export default TableRowContent;
