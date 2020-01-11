import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Logo, Button } from 'components/atoms';
import { Navigation } from 'components/molecules';
import { AccountNav } from 'components/organisms';
import { LinkType } from 'components/molecules/Navigation';
import { MyProfileInAside } from 'services/models';
import { Color, Size } from 'src/const';

interface Props {
  isLoggedIn?: boolean;
  myProfile: MyProfileInAside | null;
  handleLogout: () => void;
  navLinks: LinkType[];
}

const Header: React.FC<Props> = ({
  isLoggedIn = false,
  myProfile,
  handleLogout,
  navLinks,
}) => {
  return (
    <Container>
      <Frame>
        <LeftWrapper>
          <LogoLink to="/">
            <Logo />
          </LogoLink>
          <Navigation links={navLinks} />
        </LeftWrapper>
        <RightWrapper>
          {isLoggedIn && myProfile ? (
            <AccountNav
              imageUrl={myProfile.imageUrl}
              mypageUrl={`/users/${myProfile.loginName}`}
              handleLogout={handleLogout}
            />
          ) : (
            <Link to="/login">
              <StyledButton reverse>ログイン</StyledButton>
            </Link>
          )}
        </RightWrapper>
      </Frame>
    </Container>
  );
};

const Container = styled.header`
  height: ${Size.HEADER.HEIGHT}px;
  background-color: ${Color.THEME.PRIMARY};
`;
const Frame = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;

  /* @media (max-width: ${Size.BREAK_POINT.PC}px) {
    max-width: 1280px;
  } */

  @media (max-width: ${Size.BREAK_POINT.TABLET}px) {
    padding: 0 20px;
  }

  @media (max-width: ${Size.BREAK_POINT.MOBILE}px) {
    padding: 0 14px;
  }
`;

const WrapperCommonStyle = css`
  height: 100%;
  display: flex;
  align-items: center;
`;
const LeftWrapper = styled.div`
  ${WrapperCommonStyle}
`;
const LogoLink = styled(Link)`
  margin-right: 20px;

  &:hover {
    opacity: 0.9;
  }
`;
const RightWrapper = styled.div`
  ${WrapperCommonStyle}
`;
const StyledButton = styled(Button)`
  height: 34px;
  padding: 0 10px;
  color: ${Color.FONT.BASE};
  border: 1px solid ${Color.FONT.SUPER_LIGHT};

  &:hover {
    background-color: white;
    color: ${Color.FONT.BASE};
    opacity: 0.8;
  }
`;

export default Header;
