import React, { FC } from 'react';
import styled from 'styled-components';

const StorybookSmaple: FC<{}> = () => (
  <Container>
    <StyledButton type="button" onClick={() => null}>
      storybook!
    </StyledButton>
  </Container>
);

const Container = styled.div`
  margin: 30px;
`;
const StyledButton = styled.button`
  border: 1px solid skyblue;
  color: skyblue;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 20px;

  :hover {
    background: skyblue;
    color: white;
  }
`;

export default StorybookSmaple;
