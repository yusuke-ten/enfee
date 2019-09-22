import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs';
import Like from '.';

storiesOf('molecules/Like', module)
  .add('unliked', () => (
    <Like count={number('count', 10)} isLiked={boolean('isLiked', false)} />
  ))
  .add('liked', () => (
    <Like count={number('count', 10)} isLiked={boolean('isLiked', true)} />
  ));
