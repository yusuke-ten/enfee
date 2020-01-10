import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'components/atoms';
import HorizontalUserProfile from 'components/molecules/UserProfile/HorizontalUserProfile';
import { UserProfile } from 'services/models';

interface HorizontalUserProfileListProps {
  users: UserProfile[];
  isLoggedIn: boolean;
  isLoading: boolean;
  handleFollow: (loginName: string, isFollowing: boolean) => void;
}

const HorizontalUserProfileList: React.FC<HorizontalUserProfileListProps> = ({
  users,
  isLoggedIn,
  isLoading,
  handleFollow,
}) => {
  return (
    <>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner color="primary" height={30} width={30} />
        </SpinnerWrapper>
      ) : (
        <>
          {users.map(userProfile => (
            <HorizontalUserProfile
              key={userProfile.id}
              userProfile={userProfile}
              isLoggedIn={isLoggedIn}
              handleFollow={handleFollow}
            />
          ))}
        </>
      )}
    </>
  );
};

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
`;

export default HorizontalUserProfileList;
