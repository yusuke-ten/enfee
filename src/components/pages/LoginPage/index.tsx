import React from 'react';
import Layout from 'components/Layout';
import { LoginFormContainer } from 'containers/organisms';
import { EntranceInfo } from 'components/organisms';
import { EntranceTemplate } from 'components/templates';

const LoginPage: React.FC = () => (
  <Layout title="login page">
    <EntranceTemplate InfoComponent={EntranceInfo}>
      <LoginFormContainer />
    </EntranceTemplate>
  </Layout>
);

export default LoginPage;
