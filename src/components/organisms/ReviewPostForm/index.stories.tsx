import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Mock } from 'src/const';
import { storeList, productCategoryList } from 'services/mocks/index';
import ReviewPostForm from '.';

const pictures = [{ id: 1, picture: Mock.imageUrl }];
const reviewPostFormItems = {
  storeList,
  productCategoryList,
  pictures,
  maxPicturesCount: 6,
  postButtonDisabled: boolean('postButtonDisabled', false),
  isLoading: boolean('isLoading', false),
  categoryValue: text('categoryValue', 'non-select'),
  storeValue: text('storeValue', 'non-select'),
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
