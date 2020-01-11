import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Txt, { InfoTxt } from 'components/atoms/Txt';
import Paragraph from 'components/atoms/Paragraph';
import MediaObjectLayout from 'components/atoms/MediaObjectLayout';
import AvatarCircle from 'components/atoms/AvatarCircle';
import StoreBadge from 'components/atoms/StoreBadge';
import { FollowingButton, NotFollowingButton } from 'components/molecules';
import { UserProfile } from 'services/models';
import { Color } from 'src/const';

interface HorizontalUserProfileProps {
  userProfile: UserProfile;
  isLoggedIn: boolean;
  handleFollow: (loginName: string, isFollowing: boolean) => void;
}

const HorizontalUserProfile: React.FC<HorizontalUserProfileProps> = ({
  userProfile,
  isLoggedIn,
  handleFollow,
}) => {
  const {
    displayName,
    loginName,
    profile,
    imageUrl,
    loveStore,
    isFollowing,
  } = userProfile;
  const history = useHistory();

  const handleClickLink = useCallback(() => {
    history.push(`/users/${userProfile.loginName}`);
  }, []);

  const handleFollowWrapper = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      handleFollow(loginName, isFollowing);
    },
    [],
  );

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
            <Paragraph>{profile}</Paragraph>
          </InfoWrapper>
          {isLoggedIn && (
            <ButtonWrapper>
              {isFollowing ? (
                <FollowingButton onClick={handleFollowWrapper} size="small" />
              ) : (
                <NotFollowingButton onClick={handleFollowWrapper} size="small" />
              )}
            </ButtonWrapper>
          )}
        </RightContent>
      </MediaObjectLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: block; */
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
const ButtonWrapper = styled.div`
  margin-left: auto;
`;

export default HorizontalUserProfile;
