import React from 'react';
import styled from 'styled-components';
import HorizontalUserProfile from 'components/molecules/UserProfile/HorizontalUserProfile';
import { UserProfile } from 'services/models';
import { Color } from 'src/const';

interface UserProfileListProps {
  userProfileList: UserProfile[];
  isLoggedIn: boolean;
}

const UserProfileList: React.FC<UserProfileListProps> = ({
  userProfileList,
  isLoggedIn,
}) => {
  return (
    <>
      {userProfileList.map(userProfile => (
        <Wrapper>
          <HorizontalUserProfile
            userProfile={userProfile}
            isLoggedIn={isLoggedIn}
          />
        </Wrapper>
      ))}
    </>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  border-bottom: 1px solid ${Color.BORDER.LIGHT};
`;

export default UserProfileList;
