import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import { Spinner } from 'components/atoms';
import useInitialize from 'src/hooks/useInitialize';

const withInitialize = <P extends object>(
  Component: React.ComponentType<P>,
) => (props: P) => {
  useInitialize();

  const { appInitialized } = useSelector(
    (state: RootState) => state.intializer,
  );

  if (appInitialized) {
    return <Component {...props} />;
  }

  return (
    <Container>
      <Spinner width={45} height={45} color="primary" />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withInitialize;
