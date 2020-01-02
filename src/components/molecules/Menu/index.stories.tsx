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
          menus={['レビュー', 'フォロー中', 'フォロワー']}
          selected="レビュー"
          handleSelect={action('handleSelect')}
        />
      </FilterMenuWrapper>
      <FilterMenuWrapper>
        <FilterMenu
          menus={['フォロー中', '全体']}
          selected="フォロー中"
          handleSelect={action('handleSelect')}
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
