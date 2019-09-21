import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from 'src/modules';

const appState = (state: ApplicationState) => state.app;

interface Props {
  Component: React.FC;
}

const ShowLoggedIn: React.FC<Props> = ({ Component }) => {
  const { isLoggedIn } = useSelector(appState);

  if (!isLoggedIn) return null;

  return <Component />;
};

export default ShowLoggedIn;
