import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { withInitialize } from 'containers/hocs';
import { fetchUserProfile } from 'modules/user/actions';
import { userProfileList, userProfile } from 'services/mocks';
import useQuery from 'hooks/useQuery';

import UsersTemplate from 'components/templates/UsersTemplate';

const UsersPage: React.FC = () => {
  const { loginName } = useParams<{ loginName: string }>();
  const dispatch = useDispatch();
  const query = useQuery();
  let selectedContent = query.get('selectedConent');
  if (!selectedContent) {
    selectedContent = 'following';
  }

  const menus = ['フォロー中', 'フォロワー'];
  const [selected, setSelected] = useState<string>('フォロー中');

  const handleSelect = useCallback((selectMenu: string) => {
    setSelected(selectMenu);
  }, []);

  useEffect(() => {
    dispatch(fetchUserProfile.start(loginName));
  }, [selected]);

  // 一旦true
  const isLoggedIn = true;

  return (
    <UsersTemplate
      menuProps={{ menus, selected, handleSelect }}
      isLoggedIn={isLoggedIn}
      userProfileList={userProfileList}
      userProfile={userProfile}
    />
  );
};

export default withInitialize(UsersPage);
