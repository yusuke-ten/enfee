import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { productCategoryList } from 'src/services/mocks/productCategoryList';
import Select from '.';
import SmallSelect from './SmallSelect';

storiesOf('atoms/Select', module)
  .add('default', () => (
    <Select
      title="カテゴリー"
      items={productCategoryList}
      name="product_category"
      size={4}
      value={text('value', 'non-select')}
      handleChange={action('handleChange')}
      isError={boolean('isError', false)}
    />
  ))
  .add('SmallSelect', () => (
    <Wrapper>
      <SmallSelect
        title="カテゴリーで絞り込み"
        items={productCategoryList}
        selectProps={{ value: '0', onChange: action('onChange') }}
      />
    </Wrapper>
  ));

const Wrapper = styled.div`
  width: 300px;
`;
