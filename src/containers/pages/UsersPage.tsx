import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { withInitialize } from 'containers/hocs';
import { fetchUserProfile, follow, unfollow } from 'modules/user/actions';
import useQuery from 'hooks/useQuery';
import { RootState } from 'modules/reducer';

import UserPageContentContainer from 'containers/organisms/UserPageContent';
import UsersTemplate from 'components/templates/UsersTemplate';

export type Menus = 'レビュー' | 'フォロー中' | 'フォロワー';

const UsersPage: React.FC = () => {
  const { loginName } = useParams<{ loginName: string }>();
  const dispatch = useDispatch();
  const query = useQuery();
  let selectedContent = query.get('selectedConent');
  if (!selectedContent) {
    selectedContent = 'following';
  }

  const menus = ['レビュー', 'フォロー中', 'フォロワー'];
  const [selected, setSelected] = useState<Menus>('レビュー');

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

  useEffect(() => {
    dispatch(fetchUserProfile.start(loginName));
  }, []);

  return (
    <UsersTemplate
      loginName={loginName}
      isLoadingPage={isLoadingPage}
      menuProps={{ menus, selected, handleSelect }}
      isLoggedIn={isLoggedIn}
      userProfile={profile}
      handleFollow={handleFollow}
      contentComponent={<UserPageContentContainer selected={selected} />}
    />
  );
};

export default withInitialize(UsersPage);
