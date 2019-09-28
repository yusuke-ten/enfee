import React from 'react';
import styled from 'styled-components';
import { AvatarCircle, Usernames, StatsCell } from 'components/atoms';
import { MyProfileInAside } from 'services/models';

interface Props {
  myProfile: MyProfileInAside;
}

const UserProfileCard: React.FC<Props> = ({ myProfile }) => {
  const { imageUrl, displayName, loginName, statsList } = myProfile;

  return (
    <Container>
      <AvatarWrapper>
        <AvatarCircle src={imageUrl} />
      </AvatarWrapper>
      <Usernames
        displayName={displayName}
        loginName={loginName}
        align="center"
      />
      <StatsFrame>
        {statsList.map(stats => (
          <StatsWrapeer key={stats.heading}>
            <StatsCell heading={stats.heading} amount={stats.amount} />
          </StatsWrapeer>
        ))}
      </StatsFrame>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  background-color: #ffffff;
  padding: 20px 14px;
  width: 100%;
  box-sizing: border-box;
`;
const AvatarWrapper = styled.div`
  margin: 0 auto;
  height: 80px;
  width: 80px;
  padding-bottom: 1rem;
`;
const StatsFrame = styled.div`
  padding-top: 10px;
  display: flex;
`;
const StatsWrapeer = styled.div`
  flex: 1;
`;

export default UserProfileCard;
