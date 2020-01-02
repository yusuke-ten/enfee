import React from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import FilterMenu from 'components/molecules/Menu/FilterMenu';
import { HeaderContainer } from 'containers/organisms';
import UserProfileContent from 'components/organisms/UserProfile';
import HorizontalUserProfileList from 'components/organisms/HorizontalUserProfileList';
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
}

const UsersTemplate: React.FC<UsersTemplateProps> = ({
  userProfile,
  isLoggedIn,
  menuProps,
  userProfileList,
}) => {
  return (
    <Layout title="ユーザーページ - name">
      <HeaderContainer />
      <Body>
        <Content>
          <Profile>
            <UserProfileContent userProfile={userProfile} isLoggedIn={isLoggedIn} />
          </Profile>
          <ListTable>
            <FilterMenu {...menuProps} />
            <HorizontalUserProfileList
              userProfileList={userProfileList}
              isLoggedIn
            />
          </ListTable>
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
const ListTable = styled.div`
  background-color: white;
`;

export default UsersTemplate;
