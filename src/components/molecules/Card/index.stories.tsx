import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Color } from 'src/const';
import { myProfile } from 'services/mocks/myProfile';
import UserProfileCard from './UserProfileCard';

storiesOf('molecules/Card', module).add('UserProfileCard', () => (
  <Background>
    <Wrapper>
      <UserProfileCard myProfile={myProfile} />
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
