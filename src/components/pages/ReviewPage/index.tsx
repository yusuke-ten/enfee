import React from 'react';
import { ReviewPostButton, UserProfileCard } from 'components/molecules';
import Review from 'src/services/models/review';
import { Link as MenuLinkType } from 'components/molecules/Menu/ReviewMenu';
import { ReviewsTemplate } from 'components/templates';

const links: MenuLinkType[] = [
  { text: 'すべて', to: '/reviews/all' },
  { text: 'セブン−イレブン', to: '/reviews/seven-eleven' },
  { text: 'ファミリーマート', to: '/reviews/family-mart' },
  { text: 'ローソン', to: '/reviews/lawson' },
];

interface MyProfile {
  imageUrl: string;
  displayName: string;
  loginName: string;
  statsList: {
    heading: 'レビュー' | 'フォロー' | 'フォロワー';
    amount: number;
  }[];
}

interface Props {
  isLoadingReview: boolean;
  reviews: Review[];
  myProfile: MyProfile;
  isModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ReviewPage: React.FC<Props> = ({
  isLoadingReview = false,
  reviews,
  myProfile,
  isModal,
  openModal,
  closeModal,
}) => {
  const AsideComponent = (
    <>
      <ReviewPostButton text="レビューを投稿する" />
      {myProfile && (
        <UserProfileCard
          imageUrl={myProfile.imageUrl}
          displayName={myProfile.displayName}
          loginName={myProfile.loginName}
          statsList={myProfile.statsList}
        />
      )}
    </>
  );

  return (
    <ReviewsTemplate
      menuLinks={links}
      Aside={AsideComponent}
      isModal={isModal}
      openModal={openModal}
      closeModal={closeModal}
      reviews={reviews}
      isLoadingReview={isLoadingReview}
    />
  );
};

export default ReviewPage;
