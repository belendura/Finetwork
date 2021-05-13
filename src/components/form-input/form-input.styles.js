import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const ShrinkLabelStyles = css`
  top: 10px;
  font-size: 12px;
  color: ${mainColor};
`;

export const Container = styled.div`
  position: relative;
`;

export const Label = styled.label`
  color: ${subColor};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 30px;
  transition: 300ms ease all;

  ${({ value }) => value && ShrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  padding: 10px 10px 10px 5px;
  display: block;
  width: 200px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  }

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    ${ShrinkLabelStyles};
  }
`;
