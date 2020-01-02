import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { userProfile } from 'services/mocks';
import HorizontalUserProfile from './HorizontalUserProfile';

storiesOf('molecules/UserProfile', module).add('HorizontalUserProfile', () => (
  <HorizontalUserProfile
    userProfile={userProfile}
    isLoggedIn={boolean('isLoggedIn', true)}
  />
));
