import React from 'react';
import styled from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import reviewDetail from 'services/mocks/reviewDetail';
import ReviewDetailArea from '.';

const {
  user,
  productName,
  productCategoryName,
  picturePath,
  rating,
  createdAt,
  price,
  storeName,
  content,
} = reviewDetail;

storiesOf('organisms/ReviewDetailArea', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <Wrapper>
      <ReviewDetailArea
        user={user}
        productName={productName}
        productCategoryName={productCategoryName}
        picturePath={picturePath}
        rating={rating}
        createdAt={createdAt}
        price={price}
        storeName={storeName}
        content={content}
      />
    </Wrapper>
  ));

const Wrapper = styled.div`
  width: 670px;
`;
