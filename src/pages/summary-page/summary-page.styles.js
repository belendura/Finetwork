import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;

  @media screen and (min-width: 800px) {
    max-width: 1200px;
    flex-direction: row;
    align-items: flex-start;
  }
`;
