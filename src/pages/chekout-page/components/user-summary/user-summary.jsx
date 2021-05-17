import React from "react";

import CustomButton from "../../../../components/custom-button";

import {
  Container,
  Title,
  InfoContainer,
  InfoLabel,
  Info,
} from "./user-summary.styles";

const UserSummary = ({ submittedUser, setEditMode }) => {
  const { name, email, phone, address, addressNumber, province } =
    submittedUser;
  return (
    <Container>
      <Title>User Summary</Title>
      <InfoContainer>
        <InfoLabel>
          Name: <Info>{name}</Info>
        </InfoLabel>
        <InfoLabel>
          Email: <Info>{email}</Info>
        </InfoLabel>
        <InfoLabel>
          Phone: <Info>{phone}</Info>
        </InfoLabel>
        <InfoLabel>
          Address: <Info>{address}</Info>
        </InfoLabel>
        <InfoLabel>
          Address Number: <Info>{addressNumber}</Info>
        </InfoLabel>
        <InfoLabel>
          Province: <Info>{province}</Info>
        </InfoLabel>
        <CustomButton type="button" onClick={() => setEditMode(true)}>
          Edit
        </CustomButton>
      </InfoContainer>
    </Container>
  );
};

export default UserSummary;
