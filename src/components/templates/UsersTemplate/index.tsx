import React from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import FilterMenu from 'components/molecules/Menu/FilterMenu';
import { LoadingPage } from 'components/molecules';
import UserProfileContent from 'components/organisms/UserProfile';
import { UserProfile } from 'services/models';
import { Color, getPageTitle } from 'src/const';

interface UsersTemplateProps {
  loginName: string;
  isLoadingPage: boolean;
  userProfile: UserProfile | null;
  handleFollow: (loginName: string, isFollowing: boolean) => void;
  isLoggedIn: boolean;
  menuProps: {
    menus: string[];
    selected: string;
    handleSelect: (selectMenu: string) => void;
  };
  isMyProfilePage: boolean;
  contentComponent: React.ReactNode;
}

const UsersTemplate: React.FC<UsersTemplateProps> = ({
  loginName,
  isLoadingPage,
  userProfile,
  handleFollow,
  isLoggedIn,
  menuProps,
  isMyProfilePage,
  contentComponent,
}) => {
  return (
    <Layout title={getPageTitle['/users/:loginName'](loginName)} withHeader>
      <Body>
        {isLoadingPage || !userProfile ? (
          <LoadingPage />
        ) : (
          <Frame>
            <Profile>
              <UserProfileContent
                userProfile={userProfile}
                isLoggedIn={isLoggedIn}
                handleFollow={handleFollow}
                isMyProfilePage={isMyProfilePage}
              />
            </Profile>
            <Content>
              <FilterMenu {...menuProps} />
              <List>{contentComponent}</List>
            </Content>
          </Frame>
        )}
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
