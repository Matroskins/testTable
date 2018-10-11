// @flow

import React, { Fragment } from "react";
import { Collapse } from "react-collapse";
import { Button } from "@material-ui/core";
import ExpandIcon from "@material-ui/icons/ExpandLess";
// import type { clientTypeRow } from "helpers/types";
import InputRow from "./InputRow";
import {
  Container,
  FormStyled,
  EvenContainer,
  inputHeight,
  UnevenContainer,
  ButtonContainer,
  ExpandGroup,
  ExpandContainer
} from "./style";

type rowType = {
  id: number | string,
  value: string | number,
  name: string,
  label: string
};
type clientFormProps = {
  isShowForm: boolean,
  formRows: Array<rowType>,
  onChange: (SyntheticInputEvent<any>) => void,
  onSave: (SyntheticEvent<any>) => void
};

const ClientFormView = ({
  onSave,
  onChange,
  isShowForm,
  formRows
}: clientFormProps) => {
  return (
    <Collapse isOpened={isShowForm}>
      <Container isShowForm={isShowForm}>
        <FormStyled onSubmit={onSave}>
          <Fragment>
            {formRows.map(
              ({ id, value, name, label }: rowType, ind: number) => {
                if (ind % 2 === 0) {
                  return (
                    <EvenContainer key={id}>
                      <InputRow
                        id={id}
                        inputHeight={inputHeight}
                        label={label}
                        name={name}
                        value={value}
                        onChange={onChange}
                      />
                    </EvenContainer>
                  );
                }
                return (
                  <UnevenContainer key={id}>
                    <InputRow
                      id={id}
                      inputHeight={inputHeight}
                      label={label}
                      name={name}
                      value={value}
                      onChange={onChange}
                    />
                  </UnevenContainer>
                );
              }
            )}
          </Fragment>
          <ButtonContainer>
            <Button
              style={{
                borderRadius: "30px",
                fontWeightContainer: "bold",
                minHeight: `${inputHeight}px`
              }}
              variant="contained"
              color="secondary"
              type="submit"
              aria-label="Save"
            >
              Сохранить
            </Button>
          </ButtonContainer>
        </FormStyled>
        <ExpandGroup>
          <ExpandContainer style={{ float: "left" }}>
            <ExpandIcon />
          </ExpandContainer>
          <ExpandContainer style={{ float: "right" }}>
            <ExpandIcon />
          </ExpandContainer>
        </ExpandGroup>
      </Container>
    </Collapse>
  );
};
export default ClientFormView;
