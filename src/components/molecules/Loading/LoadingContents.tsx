import React from 'react';
import styled, { css } from 'styled-components';
import { Spinner } from 'components/atoms';

const LodingContents: React.FC<{ height?: number; spinnerSize?: number }> = ({
  height,
  spinnerSize = 30,
  ...props
}) => (
  <Container {...props} height={height}>
    <Spinner color="primary" height={spinnerSize} width={spinnerSize} />
  </Container>
);

const Container = styled.div<{ height?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
`;

export default LodingContents;
