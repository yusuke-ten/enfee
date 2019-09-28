import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  shadow?: boolean;
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ shadow = false, children, ...props }) => {
  return (
    <Container shadow={shadow} {...props}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ shadow: boolean }>`
  display: inline-block;
  padding: 1.36rem;
  background-color: white;
  ${props =>
    props.shadow &&
    css`
      box-shadow: 1px 2px 4px 0 rgba(133, 131, 131, 0.5);
    `}
`;

export default Card;
