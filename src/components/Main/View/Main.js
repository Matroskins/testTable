// @flow

import React from "react";
import styled from "styled-components";
import ClientTable from "components/ClientTable/ClientTable";
import ClientForm from "components/ClientForm/ClientForm";
import type { clientType } from "helpers";

const Container = styled.div`
  background-color: #f7f7f7;
  padding: 15px;
`;
const Title = styled.div``;
const AddClient = styled.button`
  display: flex;
  background-color: #f7f7f7;
  outline: none;
  align-items: center;
  justify-content: center;
  padding: 0px;
  border: none;
`;

type mainType = {
  isShowForm: boolean,
  changeClients: (Array<clientType>) => void,
  editableClient: ?clientType,
  onEditClient: number => void,
  onToggleFormShow: Function
};
const Main = ({
  isShowForm,
  changeClients,
  editableClient,
  onEditClient,
  onToggleFormShow
}: mainType) => {
  return (
    <Container>
      <Title>Клиенты</Title>
      <AddClient onClick={onToggleFormShow}>Добавить клиента</AddClient>
      <ClientForm
        isShowForm={isShowForm}
        onSaveClient={changeClients}
        editableClient={editableClient}
        onToggleFormShow={onToggleFormShow}
      />
      <ClientTable onEditClient={onEditClient} />
    </Container>
  );
};

export default Main;
