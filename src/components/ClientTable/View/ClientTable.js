// @flow

import React from "react";
import styled, { css } from "styled-components";
import type { clientType } from "helpers";
import { Table } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import TableRowContent from "../TableRowContent";
import TableRowHeader from "./TableRowHeader";

const media = {
  adaptiveTable: (...args) => css`
    @media (max-width: 1100px) {
      ${css(...args)};
    }
  `
};
const TableStyled = styled(Table)`
  ${media.adaptiveTable`
      overflow-x: auto;
		  display: block !important;
    `};
`;
type ClientTableType = {
  tableData: {
    tableContent: Array<clientType>,
    tableColumns: Array<string>
  },
  onEdit: number => void,
  onDelete: number => void
};
const ClientTable = ({ tableData, onEdit, onDelete }: ClientTableType) => (
  <TableStyled>
    <TableHead>
      <TableRowHeader columnNames={tableData.tableColumns} />
    </TableHead>
    <TableBody>
      {tableData.tableContent.map((tableRowData: any) => {
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
