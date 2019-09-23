import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'src/index';

/* モックデータ */
import reviewDetailData from 'src/services/mocks/reviewDetail.json';
import camelcaseKeys from 'camelcase-keys';
import { ReviewDetail } from 'src/services/models/reviewDetail';
import ReviewDetailPage from '.';

const reviewDetail = camelcaseKeys(reviewDetailData, {
  deep: true,
}) as ReviewDetail;

storiesOf('pages/ReviewDetailPage', module)
  .addDecorator(story => <Router initialEntries={['/']}>{story()}</Router>)
  .add('default', () => (
    <Provider store={store}>
      <ReviewDetailPage
        isLoading={boolean('isLoading', false)}
        closeModal={() => {}}
        reviewDetail={reviewDetail}
      />
    </Provider>
  ));
