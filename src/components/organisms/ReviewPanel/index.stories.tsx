import React from 'react';
import styled from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { object, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import reviewData from 'src/services/mocks/json/reviews.json';
import camelcaseKeys from 'camelcase-keys';
import Review from 'src/services/models/review';
import { Color } from 'src/const';
import ReviewPanel from '.';

/* eslint-disable @typescript-eslint/no-explicit-any */
const reviews = camelcaseKeys(reviewData, { deep: true }) as {
  [k: string]: any;
}[];
/* eslint-enable */

storiesOf('organisms/ReviewPanel', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <Background>
      <ReviewPanel
        review={object('review', reviews[0] as Review)}
        onOpenModal={action('onOpenModal')}
        userHidden={boolean('userHidden', false)}
      />
    </Background>
  ));

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Color.BACKGROUND.LIGTH};
`;
