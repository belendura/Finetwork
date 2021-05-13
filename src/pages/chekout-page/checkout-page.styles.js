import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 25px 10px;

  @media screen and (min-width: 800px) {
    max-width: 1200px;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 800px) {
    width: 33%;
  }
`;

export const FormContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 800px) {
    width: 66%;
  }
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;
