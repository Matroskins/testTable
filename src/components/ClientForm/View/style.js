import styled, { css } from "styled-components";

export const media = {
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

export const Container = styled.div`
  border-bottom: 1px solid #dfdfdf;
  overflow: hidden;
  opacity: ${props => (props.isShowForm ? 1 : 0)};
  transition: opacity 400ms;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  ${media.minButton`
        justify-content: center;
    `};
`;
export const EvenContainer = styled.div`
  min-width: 100px;
  display: inline-block;
`;
export const UnevenContainer = styled.div`
  min-width: 100px;
  display: inline-block;
`;
export const FormStyled = styled.form`
  display: inline-grid;
  width: 100%;
  grid-template-columns: 60% 35%;
  grid-column-gap: 3%;
  grid-row-gap: 20px;
  ${media.minSize`
        grid-template-columns: 100%;
    `};
`;
export const ExpandGroup = styled.div`
  position: relative;export
`;

export const ExpandContainer = styled.div`
  float: ${props => `${props.style.float}`};
`;
export const inputHeight = 35;
