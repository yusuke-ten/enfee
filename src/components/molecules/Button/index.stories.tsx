import React from 'react';
import { storiesOf } from '@storybook/react';
import TwitterButton from './TwitterButton';

storiesOf('molecules/Button', module).add('TwitterButton', () => (
  <TwitterButton text="twitterアカウントでログイン" />
));
