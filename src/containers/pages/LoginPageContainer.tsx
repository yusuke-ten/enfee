import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import { LoginPage } from 'components/pages';
import { RootState } from 'src/modules';
import { login } from 'modules/app';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const LoginPageContainer: React.FC = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const query = useQuery();
  const token = query.get('token');

  if (isLoggedIn) {
    return <Redirect to="/reviews/all" />;
  }
  if (token) {
    dispatch(login.succeed({ token }));
  }

  return <LoginPage />;
};

export default LoginPageContainer;
