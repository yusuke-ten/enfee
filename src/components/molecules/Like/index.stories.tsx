import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Like from '.';

storiesOf('molecules/Like', module)
  .add('unliked', () => (
    <Like
      count={number('count', 10)}
      isLiked={boolean('isLiked', false)}
      handleClick={action('click!')}
    />
  ))
  .add('liked', () => (
    <Like
      count={number('count', 10)}
      isLiked={boolean('isLiked', true)}
      handleClick={action('click!')}
    />
  ));
