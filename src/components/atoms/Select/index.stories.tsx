import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { productCategoryList } from 'src/services/mocks/productCategoryList';
import Select from '.';

storiesOf('atoms/Select', module).add('default', () => (
  <Select
    title="カテゴリー"
    items={productCategoryList}
    name="product_category"
    size={4}
    value={text('value', 'non-select')}
    handleChage={action('handleChange')}
    isError={boolean('isError', false)}
  />
));
