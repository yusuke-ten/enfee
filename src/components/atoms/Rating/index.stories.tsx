import React from 'react';
import { storiesOf } from '@storybook/react';
import Rating from '.';

storiesOf('atoms/Rating', module)
  .add('rate2.5', () => <Rating rating="5" height={20} />)
  .add('rate5.0', () => <Rating rating="8" height={20} />);
