import React from 'react';
import { storiesOf } from '@storybook/react';
import TwitterButton from './TwitterButton';
import ReviewPostButton from './ReviewPostButton';

storiesOf('molecules/Button', module)
  .add('TwitterButton', () => (
    <TwitterButton text="twitterアカウントでログイン" />
  ))
  .add('ReviewPostButton', () => <ReviewPostButton text="レビューを投稿" />);
