import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, number } from '@storybook/addon-knobs';
import { Mock } from 'src/const';
import { storeList, productCategoryList } from 'services/mocks/index';
import ReviewPostForm from '.';

const pictures = [{ id: 1, url: Mock.imageUrl, file: '' as any }];
const reviewPostFormItems = {
  storeList,
  productCategoryList,
  pictures,
  maxPicturesCount: 6,
  postButtonDisabled: boolean('postButtonDisabled', false),
  isPosting: boolean('isPosting', false),
  categoryId: number('categoryId', 0),
  storeId: number('storeId', 0),
  productNameValue: text('productNameValue', ''),
  contentValue: text('contentValue', ''),
  errorMessages: [],
  handleChangeCategory: action('handleChangeCategory'),
  handleChangeStore: action('handleChangeStore'),
  handleChageContent: action('handleChageContent'),
  handleChageProductName: action('handleChageProductName'),
  handleChangeFile: action('handleChangeFile'),
  handleSubmit: action('handleSubmit'),
};

storiesOf('organisms/ReviewPostForm', module).add('default', () => (
  <Wrapper>
    <ReviewPostForm reviewPostFormItems={reviewPostFormItems} />
  </Wrapper>
));

const Wrapper = styled.div`
  width: 670px;
`;
