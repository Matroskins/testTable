import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import InputRow from './InputRow'


const ClientFormView = ({onSave, onChange, formRows}) => {
    return (
        <form onSubmit={onSave}>
            {formRows.map( ({id, value, name, label}) => <InputRow key={id} id={id} label={label} name={name} value={value} onChange={onChange}/>)}
            <Button type='submit' aria-label="Save">Сохранить</Button>
        </form>
    )
}

export default ClientFormView