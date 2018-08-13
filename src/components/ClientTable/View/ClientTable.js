import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRowContent from "../TableRowContent";
import TableRowHeader from "./TableRowHeader";

const ClientTable = ({ tableData, onEdit, onDelete }) => (
    <Table>
      <TableHead>
        <TableRowHeader columnNames={tableData.tableColumns} />
      </TableHead>
      <TableBody>
        {tableData.tableContent.map(tableRowData => {
          const { id, ...formatData } = tableRowData;
          return (
            <TableRowContent
              key={`${id}`}
              id={id}
              onEdit={onEdit}
              onDelete={onDelete}
              data={formatData}
            />
          );
        })}
      </TableBody>
    </Table>
  );

export default ClientTable;
