// @flow

import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TableRowHeader = ({ columnNames }: { columnNames: Array<?string> }) => {
  return (
    <TableRow>
      {columnNames.map(columnName => (
        <TableCell key={columnName}>{columnName}</TableCell>
      ))}
    </TableRow>
  );
};

export default TableRowHeader;
