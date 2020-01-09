import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Txt, { InfoTxt } from 'components/atoms/Txt';
import Paragraph from 'components/atoms/Paragraph';
import MediaObjectLayout from 'components/atoms/MediaObjectLayout';
import AvatarCircle from 'components/atoms/AvatarCircle';
import StoreBadge from 'components/atoms/StoreBadge';
import { FollowButton } from 'components/molecules';
import { UserProfile } from 'services/models';
import { Color } from 'src/const';

interface HorizontalUserProfileProps {
  userProfile: UserProfile;
  isLoggedIn: boolean;
}

const HorizontalUserProfile: React.FC<HorizontalUserProfileProps> = ({
  userProfile,
  isLoggedIn,
}) => {
  const history = useHistory();

  const handleClickLink = useCallback(() => {
    history.push(`/users/${userProfile.loginName}`);
  }, []);

  const handleFollow = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      // TODO: フォロー機能を実装
    },
    [],
  );

  const { displayName, loginName, imageUrl, loveStore, isFollowing } = userProfile;

  const mockDescription =
    'ぼくの名前はくび長おばけです。セブンイレブンの商品が割と好きです。';

  return (
    <Wrapper onClick={handleClickLink}>
      <MediaObjectLayout>
        <LeftContent>
          <StyledAvatarCircle src={imageUrl} />
          <StoreBadge
            store={loveStore ? loveStore.name : 'INDEPENDENT'}
            size="small"
          />
        </LeftContent>
        <RightContent>
          <InfoWrapper>
            <Txt fontWeight="bold" size="m">
              {displayName}
            </Txt>
            <InfoTxt>@{loginName}</InfoTxt>
            <Paragraph>{mockDescription}</Paragraph>
          </InfoWrapper>
          {isLoggedIn && (
            <ButtonWrapper>
              <FollowButton
                isFollowing={isFollowing}
                onClick={handleFollow}
                size="small"
              />
            </ButtonWrapper>
          )}
        </RightContent>
      </MediaObjectLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  cursor: pointer;
  padding: 8px;
  border-bottom: 1px solid ${Color.BORDER.LIGHT};
  transition-duration: 0.2s;

  &:hover {
    background-color: ${Color.BACKGROUND.LIGTH};
  }
`;
const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
`;
const StyledAvatarCircle = styled(AvatarCircle)`
  height: 50px;
  width: 50px;
  margin-bottom: 4px;
`;
const RightContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const InfoWrapper = styled.div`
  width: 70%;
`;
const ButtonWrapper = styled.object`
  margin-left: auto;
`;

export default HorizontalUserProfile;
