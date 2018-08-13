// @flow
import React from 'react'
import styled from 'styled-components'
import ClientTable from 'components/ClientTable/ClientTable'
import ClientForm from 'components/ClientForm/ClientForm'

const Container = styled.div``
const Title = styled.div``
const AddClient = styled.button``

const Main = ({ isShowForm, changeClients, editableClient, onEditClient, onToggleFormShow }) => {
    return (
        <Container>
            <Title>Клиенты</Title>
            <AddClient onClick={onToggleFormShow}>Добавить клиента</AddClient>
            {isShowForm && <ClientForm onSaveClient={changeClients} editableClient={editableClient} onToggleFormShow={onToggleFormShow} />}
            <ClientTable onEditClient={onEditClient} />
        </Container>
    )
}

export default Main