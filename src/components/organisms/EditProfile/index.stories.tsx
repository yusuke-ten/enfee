import React from 'react';
import { storiesOf } from '@storybook/react';
import { profile, storeList } from 'services/mocks';
import EditProfile, { EditProfileProps } from '.';

const props: EditProfileProps = {
  modalProps: {
    isOpen: true,
    handleClose: () => {},
    handleOpen: () => {},
    undoAvatarProps: () => {},
  },
  avatarProps: {
    value: profile.imageUrl,
    file: null,
  },
  nameProps: {
    name: 'name',
    value: profile.displayName,
    onChangeHandler: () => {},
  },
  storeProps: {
    items: storeList,
    value: String(storeList[0].id),
    handleChange: () => {},
  },
  profileProps: {
    name: 'profile',
    value: profile.profile,
    handleChage: () => {},
  },
  handleSetAvatar: () => {},
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  },
};

storiesOf('organisms/EditProfile', module).add('default', () => (
  <EditProfile {...props} />
));
