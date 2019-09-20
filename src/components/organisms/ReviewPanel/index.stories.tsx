import React from 'react';
import styled from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import reviewData from 'src/services/mocks/reviews.json';
import camelcaseKeys from 'camelcase-keys';
import Review from 'src/services/models/review';
import { Color } from 'src/const';
import ReviewPanel from '.';

const reviews = camelcaseKeys(reviewData, { deep: true }) as Review[];

storiesOf('organisms/ReviewPanel', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <Background>
      <ReviewPanel review={object('review', reviews[0])} />
    </Background>
  ));

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Color.BACKGROUND.LIGTH};
`;
