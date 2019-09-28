import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoginPage } from 'components/pages';
import { RootState } from 'src/modules';

const LoginPageContainer: React.FC = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.app);

  if (isLoggedIn) {
    return <Redirect to="/reviews/all" />;
  }

  return <LoginPage />;
};

export default LoginPageContainer;
