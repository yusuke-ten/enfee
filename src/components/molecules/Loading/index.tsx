import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'components/atoms';
import { Size } from 'src/const';

const LodingSpinner: React.FC<{ fullHeight?: boolean }> = ({
  fullHeight = false,
  ...props
}) => (
  <Container fullHeight={fullHeight} {...props}>
    <Spinner width={36} height={36} color="primary" />
  </Container>
);

const Container = styled.div<{ fullHeight: boolean }>`
  height: ${props =>
    props.fullHeight ? '100vh' : `calc(100vh - ${Size.HEADER.HEIGHT}px) `};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LodingSpinner;
