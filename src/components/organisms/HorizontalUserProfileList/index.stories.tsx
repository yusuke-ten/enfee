import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { userProfile } from 'services/mocks';
import { UserProfile } from 'services/models';
import UserProfileList from '.';

const userProfileList: UserProfile[] = new Array(6).fill(userProfile);

storiesOf('organisms/UserProfileList', module).add('default', () => (
  <UserProfileList
    users={userProfileList}
    isLoggedIn={boolean('isLoggedIn', true)}
    isLoading={boolean('isLoading', false)}
    handleFollow={() => {}}
  />
));
