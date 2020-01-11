import React from 'react';
import { storiesOf } from '@storybook/react';
import { profile, storeList } from 'services/mocks';
import EditProfile from '.';

const props = {
  avatarProps: {
    value: profile.imageUrl,
  },
  nameProps: {
    value: profile.displayName,
    onChangeHandler: () => {},
  },
  storeProps: {
    items: storeList,
    value: String(storeList[0].id),
    handleChange: () => {},
  },
  profileProps: {
    value: profile.profile,
    handleChage: () => {},
  },
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  },
};

storiesOf('organisms/EditProfile', module).add('default', () => (
  <EditProfile {...props} />
));
