import React from 'react';
import styled, { css } from 'styled-components';
import Layout from 'components/Layout';
import { EntranceInfo } from 'components/organisms';
import { LoginFormContainer } from 'containers/organisms';
import { Color, Size } from 'src/const';

const LoginPage: React.FC = () => (
  <Layout title="login page">
    <Container>
      <Frame>
        <WrapperEntranceInfo>
          <EntranceInfo />
        </WrapperEntranceInfo>
        <WrapperForm>
          <LoginFormContainer />
        </WrapperForm>
      </Frame>
    </Container>
  </Layout>
);

const centerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Color.BACKGROUND.LIGTH};
  ${centerStyle}
`;
const Frame = styled.div`
  background: #d8d8d8;
  box-shadow: 1px 3px 5px 0 rgba(127, 127, 127, 0.51);
  border-radius: 4px;
  display: flex;
`;
const WrapperEntranceInfo = styled.div`
  display: inline-block;
  background-color: ${Color.THEME.PRIMARY};
  width: 26vw;
  min-width: 400px;

  @media (max-width: ${Size.BREAK_POINT.TABLET}px) {
    display: none;
  }
  ${centerStyle}
`;
const WrapperForm = styled.div`
  background: white;
  width: 26vw;
  min-width: 400px;
  ${centerStyle}
  padding: 70px 0;

  @media (max-width: ${Size.BREAK_POINT.MOBILE}px) {
    width: 100vw;
    height: 100vh;
  }
`;

export default LoginPage;
