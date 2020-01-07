import React from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import FilterMenu from 'components/molecules/Menu/FilterMenu';
import { HeaderContainer } from 'containers/organisms';
import UserProfileContent from 'components/organisms/UserProfile';
import { UserProfile } from 'services/models';
import { Color, Size } from 'src/const';

interface UsersTemplateProps {
  userProfile: UserProfile;
  isLoggedIn: boolean;
  menuProps: {
    menus: string[];
    selected: string;
    handleSelect: (selectMenu: string) => void;
  };
  userProfileList: UserProfile[];
  contentComponent: React.ReactNode;
}

const UsersTemplate: React.FC<UsersTemplateProps> = ({
  userProfile,
  isLoggedIn,
  menuProps,
  userProfileList,
  contentComponent,
}) => {
  return (
    <Layout title={`@${userProfile.loginName}さんのユーザーページ`}>
      <HeaderContainer />
      <Body>
        <Frame>
          <Profile>
            <UserProfileContent userProfile={userProfile} isLoggedIn={isLoggedIn} />
          </Profile>
          <Content>
            <FilterMenu {...menuProps} />
            <List>{contentComponent}</List>
          </Content>
        </Frame>
      </Body>
    </Layout>
  );
};

const Body = styled.div`
  min-height: calc(100vh - 50px);
  background-color: ${Color.BACKGROUND.LIGTH};
  box-sizing: border-box;
`;
const Frame = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 0;
`;
const Profile = styled.div`
  margin-bottom: 30px;
`;
const Content = styled.div`
  background-color: white;
`;
const List = styled.div`
  padding: 12px 14px;
`;

export default UsersTemplate;
