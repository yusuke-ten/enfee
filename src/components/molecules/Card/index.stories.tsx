import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Mock, Color } from 'src/const';
import UserInfoCard, { Stats } from './UserInfoCard';

const { imageUrl } = Mock;
const displayName = 'あおひろ';
const loginName = '@aohiro';
const statsList: Stats[] = [
  { heading: 'レビュー', amount: 30 },
  { heading: 'フォロー', amount: 59 },
  { heading: 'フォロワー', amount: 103 },
];

storiesOf('molecules/Card', module).add('UserInfoCard', () => (
  <Background>
    <UserInfoCard {...{ imageUrl, displayName, loginName, statsList }} />
  </Background>
));

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Color.BACKGROUND.LIGTH};
`;
