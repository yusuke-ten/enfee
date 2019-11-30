import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { store } from 'src';
import reviewDetail from 'services/mocks/reviewDetail';
import ReviewDetailModal from '.';

storiesOf('organisms/ReviewDetailModal', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <Wrapper>
      <ReviewDetailModal
        reviewDetail={object('reviewDetail', reviewDetail)}
        isLoading={boolean('isLodading', false)}
        closeModal={action('closeModal')}
      />
    </Wrapper>
  ));

const Wrapper = styled.div`
  width: 670px;
`;
