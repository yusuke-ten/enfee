import React from 'react';
import Layout from 'components/Layout';
import { LoginFormContainer } from 'containers/organisms';
import { EntranceTemplate } from 'components/templates';

const LoginPage: React.FC = () => (
  <Layout title="login page">
    <EntranceTemplate>
      <LoginFormContainer />
    </EntranceTemplate>
  </Layout>
);

export default LoginPage;
