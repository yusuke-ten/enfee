import React from 'react';
import styled from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Color } from 'src/const';
import ReviewMenu, { FilteringLink } from './ReviewMenu';
import FilterMenu from './FilterMenu';

const links: FilteringLink[] = [
  { text: 'すべて', to: '/reviews/all' },
  { text: 'セブン−イレブン', to: '/reviews/seven-eleven' },
  { text: 'ファミリーマート', to: '/reviews/family-mart' },
  { text: 'ローソン', to: '/reviews/lawson' },
];

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
  .add('FilterReviewMenu', () => (
    <>
      <FilterMenuWrapper>
        <FilterMenu
          menuItems={[
            { text: 'レビュー', isCurrent: true },
            { text: 'フォロー中' },
            { text: 'フォロワー' },
          ]}
          handleClick={action('handleClick')}
        />
      </FilterMenuWrapper>
      <FilterMenuWrapper>
        <FilterMenu
          menuItems={[
            { text: 'フォロー中', isCurrent: true },
            { text: '全体' },
          ]}
          handleClick={action('handleClick')}
          small
        />
      </FilterMenuWrapper>
    </>
  ));

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Color.BACKGROUND.LIGTH};
`;
const MenuWrapper = styled.div`
  width: 200px;
`;
const FilterMenuWrapper = styled.div`
  padding: 20px 20px;
  width: 500px;
`;
