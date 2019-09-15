import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Navigation } from 'components/molecules';
import { Logo } from 'components/atoms';
import { Color, Size } from 'src/const';

const links = [
  { text: 'レビュー', to: '/' },
  { text: 'コミュニティ', to: '#' },
  { text: 'メッセージ', to: '#' },
];

const Header: React.FC = () => {
  return (
    <Container>
      <Frame>
        <LeftWrapper>
          <LogoLink to="/">
            <Logo />
          </LogoLink>
          <Navigation links={links} />
        </LeftWrapper>
        <RightWrapper></RightWrapper>
      </Frame>
    </Container>
  );
};

const Container = styled.header`
  width: 100vw;
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

  @media (min-width: ${Size.BREAK_POINT.PC}px) {
    max-width: 1280px;
  }

  @media (min-width: ${Size.BREAK_POINT.TABLET}px) {
    max-width: 1000px;
  }

  @media (min-width: ${Size.BREAK_POINT.MOBILE}px) {
    max-width: 740px;
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
  &:hover {
    opacity: 0.9;
  }
`;
const RightWrapper = styled.div`
  ${WrapperCommonStyle}
`;

export default Header;
