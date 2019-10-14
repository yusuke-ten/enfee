import React from 'react';
import Layout from 'components/Layout';
import { SignupFormContainer } from 'containers/organisms';
import { EntranceInfo } from 'components/organisms';
import { EntranceTemplate } from 'components/templates';

const SignupPage: React.FC = () => (
  <Layout title="login page">
    <EntranceTemplate InfoComponent={<EntranceInfo />}>
      <SignupFormContainer />
    </EntranceTemplate>
  </Layout>
);

export default SignupPage;
