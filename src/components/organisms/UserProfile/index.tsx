import React from 'react';
import styled from 'styled-components';

import Txt, { InfoTxt } from 'components/atoms/Txt';
import StoreBadge from 'components/atoms/StoreBadge';
import AvatarCircle from 'components/atoms/AvatarCircle';
import MediaObjectLayout from 'components/atoms/MediaObjectLayout';
import Paragraph from 'components/atoms/Paragraph';
import { FollowingButton, NotFollowingButton } from 'components/molecules';
import { UserProfile } from 'services/models';

/* stats itemコンポーネント ------------- */
const StatsItem: React.FC<{ count: number; text: string }> = ({ count, text }) => (
  <Wrapper>
    <StatsCountTxt tag="span" fontWeight="bold">
      {count}
    </StatsCountTxt>
    <InfoTxt tag="span">{text}</InfoTxt>
  </Wrapper>
);

const Wrapper = styled.span`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;
/* ------------- */

interface UserProfileProps {
  userProfile: UserProfile;
  isLoggedIn: boolean;
  handleFollow: (loginName: string, isFollowing: boolean) => void;
}

const UserProfileComponent: React.FC<UserProfileProps> = ({
  userProfile,
  isLoggedIn,
  handleFollow,
}) => {
  const {
    displayName,
    loginName,
    imageUrl,
    profile,
    isFollowing,
    loveStore,
    reviewCount,
    followingCount,
    followerCount,
  } = userProfile;

  return (
    <>
      <MediaObjectLayout>
        <LeftContent>
          <StyledAvatarCircle src={imageUrl} />
          <StoreBadge store={loveStore ? loveStore.name : 'INDEPENDENT'} />
        </LeftContent>
        <RightContent>
          <Names>
            <Txt size="l" fontWeight="bold">
              {displayName}
            </Txt>
            <InfoTxt>@{loginName}</InfoTxt>
          </Names>
          <Stats>
            <StatsItem text="レビュー" count={reviewCount} />
            <StatsItem text="フォロー中" count={followingCount} />
            <StatsItem text="フォロワー" count={followerCount} />
          </Stats>
          {isLoggedIn && (
            <ButtonWrapper>
              {isFollowing ? (
                <FollowingButton
                  onClick={() => handleFollow(loginName, isFollowing)}
                />
              ) : (
                <NotFollowingButton
                  onClick={() => handleFollow(loginName, isFollowing)}
                />
              )}
            </ButtonWrapper>
          )}
        </RightContent>
      </MediaObjectLayout>
      <Description>
        <Paragraph size="b">{profile}</Paragraph>
      </Description>
    </>
  );
};

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
`;
const StyledAvatarCircle = styled(AvatarCircle)`
  height: 80px;
  width: 80px;
  margin-bottom: 6px;
`;
const RightContent = styled.div`
  position: relative;
  height: 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const Names = styled.div`
  padding-top: 9px;
`;
const Stats = styled.div`
  display: inline-block;
  background-color: #fff;
  padding: 6px 10px;
`;
const StatsCountTxt = styled(Txt)`
  padding-right: 4px;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;
const Description = styled.div`
  padding: 8px 12px;
`;

export default UserProfileComponent;
