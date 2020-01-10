import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { userProfile } from 'services/mocks';
import UserProfile from '.';

storiesOf('organisms/UserProfile', module).add('default', () => (
  <UserProfile
    userProfile={userProfile}
    isLoggedIn
    handleFollow={() => {}}
    isMyProfilePage={boolean('isMyProfilePage', false)}
  />
));
