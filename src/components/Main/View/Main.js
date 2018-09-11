// @flow
import React from 'react'
import styled from 'styled-components'
import ClientTable from 'components/ClientTable/ClientTable'
import ClientForm from 'components/ClientForm/ClientForm'

const Container = styled.div`
    background-color: #f7f7f7;
    padding: 15px;
`
const Title = styled.div``
const AddClient = styled.button`
    display: flex;
    background-color: #f7f7f7;
    outline: none;
    align-items: center;
    justify-content: center;
    padding: 0px;
    border:none;
`

const Main = ({ isShowForm, changeClients, editableClient, onEditClient, onToggleFormShow }) => {
    return (
        <Container>
            <Title>Клиенты</Title>
            <AddClient onClick={onToggleFormShow}>Добавить клиента</AddClient>
            <ClientForm isShowForm={isShowForm} onSaveClient={changeClients} editableClient={editableClient} onToggleFormShow={onToggleFormShow} />
            <ClientTable onEditClient={onEditClient} />
        </Container>
    )
}

export default Main