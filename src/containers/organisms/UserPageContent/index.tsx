import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Menus } from 'containers/pages/UsersPage';
import { actions } from 'modules/user/actions';
import ReviewPanelListContainer from './ReviewPanelListContainer';
import HorizontalUserProfileListContainer from './HorizontalUserProfileListContainer';

interface UserPageContentCotainerProps {
  selected: Menus;
}

const actionMapping: { [K in Menus]: (loginName: string) => void } = {
  フォロワー: (loginName: string) =>
    actions.fetchUsers.start(loginName, 'followers'),
  フォロー中: (loginName: string) =>
    actions.fetchUsers.start(loginName, 'following'),
  レビュー: (loginName: string) => actions.fetchReviews.start(loginName),
};

const UserPageContentCotainer: React.FC<UserPageContentCotainerProps> = ({
  selected,
}) => {
  const dispatch = useDispatch();
  const { loginName } = useParams<{ loginName: string }>();

  useEffect(() => {
    dispatch(actionMapping[selected](loginName));
  }, [selected]);

  if (selected === 'レビュー') {
    return <ReviewPanelListContainer />;
  }

  if (selected === 'フォロワー') {
    return <HorizontalUserProfileListContainer />;
  }

  if (selected === 'フォロー中') {
    return <HorizontalUserProfileListContainer />;
  }

  return null;
};

export default UserPageContentCotainer;
