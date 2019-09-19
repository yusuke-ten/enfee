import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import StatsCell from '.';

storiesOf('atoms/StatsCell', module).add('default', () => (
  <StatsCell
    heading={text('heading', 'Reviews')}
    amount={number('amount', 10)}
  />
));
