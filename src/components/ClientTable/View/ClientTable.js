import React from "react";
import styled, {css} from 'styled-components';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRowContent from "../TableRowContent";
import TableRowHeader from "./TableRowHeader";

const media = {
  adaptiveTable: (...args) => css`
    @media (max-width: 1100px) {
      ${ css(...args) }
    }
  `
}
const TableStyled = styled(Table)`
  ${media.adaptiveTable`
      overflow-x: auto;
		  display: block !important;
    `}
`

const ClientTable = ({ tableData, onEdit, onDelete }) => (
    <TableStyled>
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
    </TableStyled>
  );

export default ClientTable;
