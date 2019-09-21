import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Mock, Color } from 'src/const';
import UserProfileCard, { Stats } from './UserProfileCard';

const { imageUrl } = Mock;
const displayName = 'あおひろ';
const loginName = '@aohiro';
const statsList: Stats[] = [
  { heading: 'レビュー', amount: 30 },
  { heading: 'フォロー', amount: 59 },
  { heading: 'フォロワー', amount: 103 },
];

storiesOf('molecules/Card', module).add('UserProfileCard', () => (
  <Background>
    <Wrapper>
      <UserProfileCard {...{ imageUrl, displayName, loginName, statsList }} />
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
