import React from 'react';
import { Menus } from 'containers/pages/UsersPage';
import ReviewPanelListContainer from './ReviewPanelListContainer';
import HorizontalUserProfileListContainer from './HorizontalUserProfileListContainer';

interface UserPageContentCotainerProps {
  selected: Menus;
}

const UserPageContentCotainer: React.FC<UserPageContentCotainerProps> = ({
  selected,
}) => {
  if (selected === 'レビュー') {
    return <ReviewPanelListContainer />;
  }

  if (selected === 'フォロワー') {
    return <HorizontalUserProfileListContainer target="followers" />;
  }

  if (selected === 'フォロー中') {
    return <HorizontalUserProfileListContainer target="following" />;
  }

  return null;
};

export default UserPageContentCotainer;
