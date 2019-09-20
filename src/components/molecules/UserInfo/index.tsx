import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AvatarCircle } from 'components/atoms';
import { Color, Size } from 'src/const';

interface Props {
  imageUrl: string | null;
  displayName: string;
  loginName: string;
  userPageUrl: string | null;
  size?: 'small' | 'normal';
}

const UserInfo: React.FC<Props> = ({
  imageUrl = '',
  displayName,
  loginName,
  userPageUrl,
  size = 'normal',
}) => {
  const isSmall = size === 'small';

  return (
    <Container>
      <AvatarFrame to={userPageUrl || '#'} isSmall={isSmall}>
        <AvatarCircle src={imageUrl || ''} />
      </AvatarFrame>
      <div>
        <DisplayName isSmall={isSmall}>{displayName}</DisplayName>
        <LoginName isSmall={isSmall}>{loginName}</LoginName>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;
const AvatarFrame = styled(Link)<{ isSmall: boolean }>`
  display: inline-block;
  height: ${props => (props.isSmall ? 34 : 50)}px;
  width: ${props => (props.isSmall ? 34 : 50)}px;
  margin-right: 1.6rem;
`;
const DisplayName = styled.div<{ isSmall: boolean }>`
  font-size: ${props =>
    props.isSmall ? Size.FONT_RATIO.BASE : Size.FONT_RATIO.MEDIUM}rem;
  color: ${Color.FONT.SUPER_DARK};
`;
const LoginName = styled.div<{ isSmall: boolean }>`
  font-size: ${props =>
    props.isSmall ? Size.FONT_RATIO.SMALL : Size.FONT_RATIO.BASE}rem;
  color: ${Color.FONT.DARK};
`;

export default UserInfo;
