import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Mock } from 'src/const';
import {
  storeList,
  productCategoryList,
  myProfile,
} from 'services/mocks/index';
import ReviewPostTemplate from '.';

const pictures = [
  { id: 1, url: Mock.imageUrl, file: '' as any },
  { id: 2, url: Mock.imageUrl, file: '' as any },
];
const reviewPostFormItems = {
  storeList,
  productCategoryList,
  pictures,
  maxPicturesCount: 6,
  postButtonDisabled: boolean('postButtonDisabled', false),
  isPosting: boolean('isLoading', false),
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

storiesOf('templates/ReviewPostTemplate', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/reviews/new']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <ReviewPostTemplate
      reviewPostFormItems={reviewPostFormItems}
      myProfile={myProfile}
      isLoggedIn={boolean('isLoggedIn', true)}
    />
  ));
