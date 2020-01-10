import React from 'react';
import { storiesOf } from '@storybook/react';
import { userProfile } from 'services/mocks';
import UserProfile from '.';

storiesOf('organisms/UserProfile', module).add('default', () => (
  <UserProfile userProfile={userProfile} isLoggedIn handleFollow={() => {}} />
));
