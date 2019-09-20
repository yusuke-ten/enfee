import React from 'react';
import styled from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { Color } from 'src/const';
import ReviewMenu, { Link } from './ReviewMenu';

const links: Link[] = [
  { text: 'すべて', to: '/reviews/all' },
  { text: 'セブン−イレブン', to: '/reviews/seven-eleven' },
  { text: 'ファミリーマート', to: '/reviews/family-mart' },
  { text: 'ローソン', to: '/reviews/lawson' },
]

storiesOf('molecules/Menu', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/reviews/all']}>{story()}</MemoryRouter>
  ))
  .add('ReviewMenu', () => (
    <Background>
      <MenuWrapper>
        <ReviewMenu links={links} />
      </MenuWrapper>
    </Background>
  ))

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Color.BACKGROUND.LIGTH};
`;
const MenuWrapper = styled.div`
  width: 200px;
`
