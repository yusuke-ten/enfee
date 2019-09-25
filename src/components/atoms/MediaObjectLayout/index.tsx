import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  tag?: React.ReactType | keyof JSX.IntrinsicElements;
}

const MediaObjectLayout: React.FC<Props> = ({
  tag = 'div',
  children,
  ...props
}) => {
  const aryChildren = React.Children.toArray(children);

  return (
    <Container as={tag} {...props}>
      <div>{aryChildren[0]}</div>
      <Body>{aryChildren.slice(1)}</Body>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Body = styled.div`
  flex: 1;
  min-width: 0;
`;

export default MediaObjectLayout;
