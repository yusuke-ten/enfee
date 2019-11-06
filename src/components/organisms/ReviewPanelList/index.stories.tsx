import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import camelcaseKeys from 'camelcase-keys';
import reviewsData from 'services/mocks/json/reviews.json';
import { Review } from 'services/models';
import ReviewPanelList from '.';

/* eslint-disable @typescript-eslint/no-explicit-any */
const tmpReviews = camelcaseKeys(reviewsData, { deep: true }) as {
  [k: string]: any;
}[];
const reviews = tmpReviews as Review[];
/* eslint-enable */

storiesOf('organisms/ReviewPanelList', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('ReviewPanelList', () => (
    <ReviewPanelList
      reviews={object('reviews', reviews)}
      openModal={action('openModal')}
    />
  ));
