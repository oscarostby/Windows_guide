import React from 'react';
import styled from 'styled-components';

const LeftBoxContainer = styled.div`
  flex: 1;
  background-color: #ffffff;
  border: 1px solid #b3b3b3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333333;
`;

const SmallText = styled.p`
  font-size: 14px;
  color: #666666;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  background-color: #0078d4;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005a9e;
  }
`;

const LeftBox = () => {
  return (
    <LeftBoxContainer>
      <Text>Windows Server</Text>
      <SmallText>Tutorial</SmallText>
      <Button>Gå til tutorial side</Button>
    </LeftBoxContainer>
  );
};

export default LeftBox;
