import React from 'react';
import { storiesOf } from '@storybook/react';
import productCategories from 'services/mocks/productCategories';
import Select from '.';

storiesOf('atoms/Select', module).add('default', () => (
  <Select
    title="カテゴリー"
    items={productCategories}
    name="product_category"
  />
));
