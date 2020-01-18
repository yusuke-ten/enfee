import React from 'react';
import { storiesOf } from '@storybook/react';
import { productCategoryList } from 'src/services/mocks/productCategoryList';
import SelectField, { SelectFieldProps } from '.';

const passProps: SelectFieldProps = {
  title: 'カテゴリー',
  label: 'カテゴリー:',
  name: 'product_category',
  items: productCategoryList,
  value: 'non-select',
  handleChange: () => {},
};

storiesOf('molecules/SelectField', module).add('default', () => (
  <SelectField {...passProps} />
));
