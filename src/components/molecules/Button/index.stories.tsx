import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import TwitterButton from './TwitterButton';
import ReviewPostButton from './ReviewPostButton';
import WithLoadingPostButton from './PostButtonWithLoading';

storiesOf('molecules/Button', module)
  .add('TwitterButton', () => (
    <TwitterButton text="twitterアカウントでログイン" />
  ))
  .add('ReviewPostButton', () => <ReviewPostButton text="レビューを投稿" />)
  .add('WithLoadingPostButton', () => (
    <WithLoadingPostButton
      text={text('text', '投稿する')}
      lodaingText={text('loadingText', '送信中')}
      isLoading={boolean('isLoading', false)}
      disabled={boolean('disabled', false)}
    />
  ));
