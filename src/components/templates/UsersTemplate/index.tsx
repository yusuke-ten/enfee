import React from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import { HeaderContainer } from 'containers/organisms';

import { Color, Size } from 'src/const';

const UsersTemplate: React.FC = () => {
  return (
    <Layout title="ユーザーページ - name">
      <HeaderContainer />
      <Body>
        <Content>
          <Profile>User Profile</Profile>
          <Tables>Menu Tables</Tables>
        </Content>
      </Body>
    </Layout>
  );
};

const Body = styled.div`
  min-height: calc(100vh - 50px);
  background-color: ${Color.BACKGROUND.LIGTH};
  box-sizing: border-box;
`;
const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 0;
`;
const Profile = styled.div`
  margin-bottom: 30px;
`;
const Tables = styled.div``;

export default UsersTemplate;
