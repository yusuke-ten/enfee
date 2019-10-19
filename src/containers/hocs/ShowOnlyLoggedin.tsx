import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/modules';

interface Props {
  Component: React.FC;
}

const ShowLoggedIn: React.FC<Props> = ({ Component }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  if (!isLoggedIn) return null;

  return <Component />;
};

export default ShowLoggedIn;
