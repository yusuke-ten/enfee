import React, { useState, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import withInitialize from 'containers/hocs/withInitialize';
import { RootState } from 'modules/reducer';
import { actions } from 'modules/user/actions';
import { storeList } from 'services/mocks';

import SettingsProfileTemplate from 'components/templates/SettingsProfileTemplate';
import { UserProfile } from 'src/services/models';
import useOpen from 'src/hooks/useOpen';

interface AvatarProps {
  value: string;
  file: File | null;
}

const SettingsProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const profile = useSelector(
    (state: RootState) => state.app.myProfile as UserProfile,
  );

  const modalProps = useOpen();

  const initialAvatarProps = {
    value: profile.imageUrl,
    file: null,
  };
  const [avatarProps, setAvatarProps] = useState<AvatarProps>(initialAvatarProps);
  // 複数回ファイルをinputしたときに、一つ前のfileに戻るために保持しておく
  const prevAvatarProps = useRef<AvatarProps>(initialAvatarProps);

  const [formState, setFormState] = useState({
    name: profile.displayName,
    profile: profile.profile,
  });

  const [storeId, setStoreId] = useState<string>(
    profile.loveStore ? String(profile.loveStore.id) : '0',
  );

  const handleSetAvatar = useCallback((imageUrl: string, file: File) => {
    const newAvatarProps = {
      value: imageUrl,
      file,
    };
    prevAvatarProps.current = newAvatarProps;
    setAvatarProps(newAvatarProps);
  }, []);

  const undoAvatarProps = useCallback(() => {
    setAvatarProps(prevAvatarProps.current);
  }, [prevAvatarProps]);

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
          {
            image: avatarProps.file ? avatarProps.file : undefined,
            ...formState,
            storeId: String(storeId),
          },
          profile.loginName,
        ),
      );
    },
    [formState, storeId, avatarProps],
  );

  const passProps = {
    modalProps: {
      ...modalProps,
      undoAvatarProps,
    },
    avatarProps,
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
    handleSetAvatar,
    handleSubmit,
  };

  return <SettingsProfileTemplate {...passProps} />;
};

export default withInitialize(SettingsProfilePage);
