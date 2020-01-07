import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'components/atoms';
import HorizontalUserProfile from 'components/molecules/UserProfile/HorizontalUserProfile';
import { UserProfile } from 'services/models';
import { Color } from 'src/const';

interface HorizontalUserProfileListProps {
  users: UserProfile[];
  isLoggedIn: boolean;
  isLoading: boolean;
}

const HorizontalUserProfileList: React.FC<HorizontalUserProfileListProps> = ({
  users,
  isLoggedIn,
  isLoading,
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
            <Wrapper key={userProfile.id}>
              <HorizontalUserProfile
                userProfile={userProfile}
                isLoggedIn={isLoggedIn}
              />
            </Wrapper>
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
const Wrapper = styled.div`
  padding: 8px;
  border-bottom: 1px solid ${Color.BORDER.LIGHT};
`;

export default HorizontalUserProfileList;
