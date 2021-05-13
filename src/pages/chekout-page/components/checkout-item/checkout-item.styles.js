import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${"" /* align-items: center; */}
  align-items:space-between;
  width: 100%;
  margin: 10px 0;
  border-bottom: 1px solid grey;
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
`;

// export const Product = styled.div`
//  display: flex;
//   flex-direction: column;
//   align-items:space-between;
//   width:100%;
//   margin: 10px 0;
// border-bottom: 1px solid grey;
// `;

// export const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 10px;
//   ${"" /* border: thin solid black;  */}
//   text-align:center;
// `;

// export const HeaderTitle = styled.span`
//   font-size: 10px;
//   font-weight: bold;
//   text-transform: capitalize;
//   width: 10%;
// `;

// export const HeaderPrice = styled.span`
//   font-size: 10px;
//   font-weight: bold;
//   text-transform: capitalize;
//   width: 10%;
// `;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
