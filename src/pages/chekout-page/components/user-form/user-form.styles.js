import styled from "styled-components";

import { Button } from "../../../../components/custom-button/custom-button.styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Button} {
    margin-top: 20px;
  }
`;
