import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingPage from './LoadingPage';
import LoadingContents from './LoadingContents';

storiesOf('molecules/Loading', module)
  .add('LoadingPage with header', () => <LoadingPage />)
  .add('LoadingPage fullHeight', () => <LoadingPage fullHeight />)
  .add('LoadingContents', () => <LoadingContents />)
  .add('LoadingContents small spinner', () => (
    <LoadingContents spinnerSize={18} height={30} />
  ));
