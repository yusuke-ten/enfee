import React from 'react';
import styled from 'styled-components';
import Txt, { InfoTxt } from 'components/atoms/Txt';
import Paragraph from 'components/atoms/Paragraph';
import MediaObjectLayout from 'components/atoms/MediaObjectLayout';
import AvatarCircle from 'components/atoms/AvatarCircle';
import StoreBadge from 'components/atoms/StoreBadge';
import Button from 'components/atoms/Button';
import { UserProfile } from 'services/models';

interface HorizontalUserProfileProps {
  userProfile: UserProfile;
  isLoggedIn: boolean;
}

const HorizontalUserProfile: React.FC<HorizontalUserProfileProps> = ({
  userProfile,
  isLoggedIn,
}) => {
  const { displayName, loginName, imageUrl, loveStore } = userProfile;

  const mockDescription =
    'ぼくの名前はくび長おばけです。セブンイレブンの商品が割と好きです。';

  return (
    <MediaObjectLayout>
      <LeftContent>
        <StyledAvatarCircle src={imageUrl} />
        <StoreBadge
          store={loveStore ? loveStore.name : 'INDEPENDENT'}
          size="small"
        />
      </LeftContent>
      <RightContent>
        <div>
          <Txt fontWeight="bold" size="m">
            {displayName}
          </Txt>
          <InfoTxt>@{loginName}</InfoTxt>
          <Paragraph>{mockDescription}</Paragraph>
        </div>
        {isLoggedIn && (
          <ButtonWrapper>
            <Button shape="oval" size="small" reverse>
              フォロー
            </Button>
          </ButtonWrapper>
        )}
      </RightContent>
    </MediaObjectLayout>
  );
};

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
const ButtonWrapper = styled.div`
  margin-left: auto;
`;

export default HorizontalUserProfile;
