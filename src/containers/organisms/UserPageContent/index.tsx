import React from 'react';
import { Menus } from 'containers/pages/UsersPage';
import ReviewPanelList from 'components/organisms/ReviewPanelList';
import HorizontalUserProfileList from 'components/organisms/HorizontalUserProfileList';
import { reviews, userProfileList } from 'services/mocks';
import HorizontalUserProfileListContainer from './HorizontalUserProfileListContainer';

interface UserPageContentCotainerProps {
  selected: Menus;
}

const UserPageContentCotainer: React.FC<UserPageContentCotainerProps> = ({
  selected,
}) => {
  if (selected === 'レビュー') {
    return (
      <ReviewPanelList
        reviews={reviews}
        openModal={() => {}}
        isLoadingReview={false}
      />
    );
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
