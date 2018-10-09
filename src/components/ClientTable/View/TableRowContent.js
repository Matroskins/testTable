// @flow

import React, { Fragment } from "react";
import styled from "styled-components";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import { commentEmptyColumns } from "helpers";

const IconButton = styled.button`
  display: flex;
  outline: none;
  align-items: center;
  justify-content: center;
  padding: 0px;
  background-color: inherit;
  border: none;
  max-width: 15px;
  max-height: 15px;
`;
const ControllButtonGroup = styled.div`
  min-width: 35px;
  min-height: 25px;
  display: flex;
`;
const EditIconStyled = styled(EditIcon)`
  max-width: 100%;
  max-height: 100%;
`;
const CloseIconStyled = styled(CloseIcon)`
  max-width: 100%;
  max-height: 100%;
`;

const TableRowContent = ({
  data,
  onEdit,
  onDelete
}: {
  data: Array<string>,
  onEdit: () => void,
  onDelete: () => void
}) => {
  return (
    <TableRow>
      <TableCell>
        <ControllButtonGroup>
          <IconButton onClick={onEdit}>
            <EditIconStyled />
          </IconButton>
          <IconButton onClick={onDelete}>
            <CloseIconStyled />
          </IconButton>
        </ControllButtonGroup>
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
