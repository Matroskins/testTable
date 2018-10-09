// @flow

import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { Collapse } from "react-collapse";
import { Button } from "@material-ui/core";
import ExpandIcon from "@material-ui/icons/ExpandLess";
import InputRow from "./InputRow";

const media = {
  minSize: (...args) => css`
    @media (max-width: 720px) {
      ${css(...args)};
    }
  `,
  minButton: (...args) => css`
    @media (max-width: 720px) {
      ${css(...args)};
    }
  `
};

const Container = styled.div`
  border-bottom: 1px solid #dfdfdf;
  overflow: hidden;
  opacity: ${props => (props.isShowForm ? 1 : 0)};
  transition: opacity 400ms;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  ${media.minButton`
        justify-content: center;
    `};
`;
const EvenContainer = styled.div`
  min-width: 100px;
  display: inline-block;
`;
const UnevenContainer = styled.div`
  min-width: 100px;
  display: inline-block;
`;
const FormStyled = styled.form`
  display: inline-grid;
  width: 100%;
  grid-template-columns: 60% 35%;
  grid-column-gap: 3%;
  grid-row-gap: 20px;
  ${media.minSize`
        grid-template-columns: 100%;
    `};
`;
const ExpandGroup = styled.div`
  position: relative;
`;

const ExpandContainer = styled.div`
  float: ${props => `${props.style.float}`};
`;
const inputHeight = 35;

const ClientFormView = ({ onSave, onChange, isShowForm, formRows }) => {
  return (
    <Collapse isOpened={isShowForm}>
      <Container isShowForm={isShowForm}>
        <FormStyled onSubmit={onSave}>
          <Fragment>
            {formRows.map(({ id, value, name, label }, ind) => {
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
            })}
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
