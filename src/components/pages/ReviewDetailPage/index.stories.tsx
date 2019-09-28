import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
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
}) as { [k: string]: any };

storiesOf('pages/ReviewDetailPage', module)
  .addDecorator(story => <Router initialEntries={['/']}>{story()}</Router>)
  .add('default', () => (
    <Provider store={store}>
      <ReviewDetailPage
        reviewDetail={reviewDetail as ReviewDetail}
        isLoading={boolean('isLoading', false)}
        closeModal={action('closeModal')}
        commentValue={text('commentValue', '')}
        commentChangeHandler={action('commentChangeHandler')}
        submitCommentHandler={action('submitCommentHandler')}
      />
    </Provider>
  ));
