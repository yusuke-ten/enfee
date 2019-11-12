import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { productCategoryList } from 'src/services/mocks/productCategoryList';
import FilterReviewMenu from '.';

storiesOf('organisms/FilterReviewMenu', module).add('default', () => (
  <Wrapper>
    <FilterReviewMenu
      selectItems={productCategoryList}
      selectProps={{ value: '0', onChange: action('onChange') }}
      menuItems={[{ text: 'フォロー中', isCurrent: true }, { text: '全体' }]}
      handleClick={action('handleClick')}
    />
  </Wrapper>
));

const Wrapper = styled.div`
  padding: 12px;
  width: 500px;
`;
