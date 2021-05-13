import styled from "styled-components";

const subColor = "grey";
const mainColor = "black";

export const Container = styled.div`
  position: relative;
`;

export const Select = styled.select`
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

  &:focus {
    outline: none;
  }
`;

export const Option = styled.option``;

export const Label = styled.label`
  color: ${mainColor};
  font-size: 12px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`;
