import React from 'react';
import Review from 'src/services/models/review';
import { Link as MenuLinkType } from 'components/molecules/Menu/ReviewMenu';
import { ReviewsTemplate } from 'components/templates';
import { MyProfileInAside } from 'services/models';

const links: MenuLinkType[] = [
  { text: 'すべて', to: '/reviews/all' },
  { text: 'セブン−イレブン', to: '/reviews/seven-eleven' },
  { text: 'ファミリーマート', to: '/reviews/family-mart' },
  { text: 'ローソン', to: '/reviews/lawson' },
];

interface Props {
  isLoadingReview: boolean;
  reviews: Review[];
  myProfile: MyProfileInAside | null;
  isModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ReviewsPage: React.FC<Props> = ({
  isLoadingReview = false,
  reviews,
  myProfile,
  isModal,
  openModal,
  closeModal,
}) => {
  return (
    <ReviewsTemplate
      menuLinks={links}
      isModal={isModal}
      openModal={openModal}
      closeModal={closeModal}
      reviews={reviews}
      isLoadingReview={isLoadingReview}
      myProfile={myProfile}
    />
  );
};

export default ReviewsPage;
