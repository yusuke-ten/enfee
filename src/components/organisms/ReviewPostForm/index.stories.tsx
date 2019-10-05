import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Color, Mock } from 'src/const';
import { storeList, productCategoryList } from 'services/mocks/index';
import ReviewPostForm from '.';

const pictures = [Mock.imageUrl];

storiesOf('organisms/ReviewPostForm', module).add('default', () => (
  <Background>
    <Wrapper>
      <ReviewPostForm
        storeList={storeList}
        productCategoryList={productCategoryList}
        pictures={pictures}
        maxPicturesCount={6}
        postButtonDisabled={boolean('postButtonDisabled', false)}
        isLoading={boolean('isLoading', false)}
        categoryValue={text('categoryValue', 'non-select')}
        storeValue={text('storeValue', 'non-select')}
        productNameValue={text('productNameValue', '')}
        contentValue={text('contentValue', '')}
        handleChangeCategory={action('handleChangeCategory')}
        handleChangeStore={action('handleChangeStore')}
        handleChageContent={action('handleChageContent')}
        handleChageProductName={action('handleChageProductName')}
        handleChangeFile={action('handleChangeFile')}
        handleSubmit={action('handleSubmit')}
      />
    </Wrapper>
  </Background>
));

const Background = styled.div`
  width: 100vw;
  background-color: ${Color.BACKGROUND.LIGTH};
`;
const Wrapper = styled.div`
  width: 670px;
`;
