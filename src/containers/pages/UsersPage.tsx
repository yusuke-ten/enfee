import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { withInitialize } from 'containers/hocs';
import { fetchUserProfile, follow, unfollow } from 'modules/user/actions';
import { RootState } from 'modules/reducer';

import UserPageContentContainer from 'containers/organisms/UserPageContent';
import UsersTemplate from 'components/templates/UsersTemplate';

export type Menus = 'レビュー' | 'フォロー中' | 'フォロワー';
const menus: Menus[] = ['レビュー', 'フォロー中', 'フォロワー'];

const UsersPage: React.FC = () => {
  const { loginName } = useParams<{ loginName: string }>();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<Menus>(menus[0]);

  const handleSelect = useCallback((selectMenu: string) => {
    setSelected(selectMenu as Menus);
  }, []);

  const handleFollow = useCallback((target: string, isFollowing: boolean) => {
    if (isFollowing) {
      dispatch(unfollow(target));
    } else {
      dispatch(follow(target));
    }
  }, []);

  const { isLoadingPage } = useSelector((state: RootState) => state.app);
  const { profile } = useSelector((state: RootState) => state.user);
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const { myProfile } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    dispatch(fetchUserProfile.start(loginName));
    setSelected(menus[0]);
  }, [loginName]);

  return (
    <UsersTemplate
      loginName={loginName}
      isLoadingPage={isLoadingPage}
      menuProps={{ menus, selected, handleSelect }}
      isLoggedIn={isLoggedIn}
      userProfile={profile}
      handleFollow={handleFollow}
      contentComponent={<UserPageContentContainer selected={selected} />}
      isMyProfilePage={
        myProfile ? myProfile.loginName === profile.loginName : false
      }
    />
  );
};

export default withInitialize(UsersPage);
