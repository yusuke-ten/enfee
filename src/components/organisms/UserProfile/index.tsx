import React from 'react';
import styled from 'styled-components';

import Txt, { InfoTxt } from 'components/atoms/Txt';
import StoreBadge from 'components/atoms/StoreBadge';
import Button from 'components/atoms/Button';
import AvatarCircle from 'components/atoms/AvatarCircle';
import MediaObjectLayout from 'components/atoms/MediaObjectLayout';
import Paragraph from 'components/atoms/Paragraph';
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

const Wrapper = styled.div`
  margin-right: 20px;
`;
/* ------------- */

interface UserProfileProps {
  userProfile: UserProfile;
  isLoggedIn: boolean;
}

const UserProfileComponent: React.FC<UserProfileProps> = ({
  userProfile,
  isLoggedIn,
}) => {
  const {
    displayName,
    loginName,
    imageUrl,
    loveStore,
    reviewCount,
    followingCount,
    followerCount,
  } = userProfile;

  const mockDescription =
    'ぼくの名前はくび長おばけです。セブンイレブンの商品が割と好きです。';

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
              <Button shape="oval" reverse>
                フォロー
              </Button>
            </ButtonWrapper>
          )}
        </RightContent>
      </MediaObjectLayout>
      <Description>
        <Paragraph>{mockDescription}</Paragraph>
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
  padding: 12px;
  position: relative;
`;
const Names = styled.div``;
const Stats = styled.div`
  margin-top: 6px;
  background-color: white;
  display: flex;
`;
const StatsCountTxt = styled(Txt)`
  padding-right: 4px;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 20px;
`;
const Description = styled.div`
  padding: 8px 12px;
`;

export default UserProfileComponent;
