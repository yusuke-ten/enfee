import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { myProfile } from 'services/mocks/myProfile';
import { Color } from 'src/const';
import Aside from '.';

storiesOf('molecules/Aside', module)
  .add('login user', () => (
    <Background>
      <Wrapper>
        <Aside myProfile={myProfile} />
      </Wrapper>
    </Background>
  ))
  .add('not login user', () => (
    <Background>
      <Wrapper>
        <Aside myProfile={null} />
      </Wrapper>
    </Background>
  ));

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Color.BACKGROUND.LIGTH};
`;
const Wrapper = styled.div`
  width: 240px;
`;
