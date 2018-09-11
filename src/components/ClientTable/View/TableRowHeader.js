import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

console.log("dasd");
console.log("dasd");
console.log("dasd");

const TableRowHeader = ({ columnNames }) => {
  return (
    <TableRow>
      {columnNames.map(columnName => (
        <TableCell key={columnName}>{columnName}</TableCell>
      ))}
    </TableRow>
  );
};

export default TableRowHeader;
