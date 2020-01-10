import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import TwitterButton from './TwitterButton';
import ReviewPostButton from './ReviewPostButton';
import WithLoadingPostButton from './PostButtonWithLoading';
import PenLauncherButton from './PenLauncherButton';
import FollowingButton from './FollowingButton';
import NotFollowingButton from './NotFollowingButton';

storiesOf('molecules/Button', module)
  .add('FollowButton', () => (
    <>
      <div style={{ marginBottom: '10px' }}>
        <FollowingButton onClick={() => {}} />
      </div>
      <div>
        <NotFollowingButton onClick={() => {}} />
      </div>
    </>
  ))
  .add('TwitterButton', () => <TwitterButton text="twitterアカウントでログイン" />)
  .add('ReviewPostButton', () => <ReviewPostButton text="レビューを投稿" />)
  .add('WithLoadingPostButton', () => (
    <WithLoadingPostButton
      text={text('text', '投稿する')}
      lodaingText={text('loadingText', '送信中')}
      isPosting={boolean('isLoading', false)}
      disabled={boolean('disabled', false)}
    />
  ))
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('PenLauncherButton', () => <PenLauncherButton to="/reviews/new" />);
