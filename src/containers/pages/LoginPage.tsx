import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import { RootState } from 'src/modules';
import { login } from 'modules/app';
import Layout from 'components/Layout';
import { LoginFormContainer } from 'containers/organisms';
import { EntranceInfo } from 'components/organisms';
import { EntranceTemplate } from 'components/templates';

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

  return (
    <Layout title="login page">
      <EntranceTemplate InfoComponent={<EntranceInfo />}>
        <LoginFormContainer />
      </EntranceTemplate>
    </Layout>
  );
};

export default LoginPageContainer;
