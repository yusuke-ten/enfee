import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import withInitialize from 'containers/hocs/withInitialize';
import { RootState } from 'modules/reducer';
import { actions } from 'modules/user/actions';
import { storeList } from 'services/mocks';

import SettingsProfileTemplate from 'components/templates/SettingsProfileTemplate';
import { UserProfile } from 'src/services/models';

// login user のみに表示させるようにする
// なので、profileはstateに存在するという前提

const SettingsProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const profile = useSelector(
    (state: RootState) => state.app.myProfile as UserProfile,
  );

  const [formState, setFormState] = useState({
    name: profile.displayName,
    profile: profile.profile,
  });

  const [storeId, setStoreId] = useState<string>(
    profile.loveStore ? String(profile.loveStore.id) : '0',
  );

  const handleChanageInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    },
    [formState],
  );

  const handleChangeStore = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setStoreId(e.target.value);
    },
    [storeId],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(
        actions.updateProfile.start(
          { ...formState, storeId: String(storeId) },
          profile.loginName,
        ),
      );
    },
    [formState, storeId],
  );

  const passProps = {
    avatarProps: {
      value: profile.imageUrl,
    },
    nameProps: {
      name: 'name',
      value: formState.name,
      onChangeHandler: handleChanageInput,
    },
    storeProps: {
      items: storeList,
      value: storeId,
      handleChange: handleChangeStore,
    },
    profileProps: {
      name: 'profile',
      value: formState.profile,
      handleChage: handleChanageInput,
    },
    handleSubmit,
  };

  return <SettingsProfileTemplate {...passProps} />;
};

export default withInitialize(SettingsProfilePage);
