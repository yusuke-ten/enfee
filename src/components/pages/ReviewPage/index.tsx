import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'components/atoms';
import { ReviewPostButton, UserProfileCard } from 'components/molecules';
import { ReviewPanel } from 'components/organisms';
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
  const LoadingComponent = (
    <SpinnerWrapper>
      <Spinner color="primary" height={45} width={45} />
    </SpinnerWrapper>
  );

  const ReviewsComponent = reviews.map(review => (
    <ReviewWrapper key={review.id}>
      <ReviewPanel review={review} onOpenModal={openModal} />
    </ReviewWrapper>
  ));

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
    >
      {isLoadingReview ? LoadingComponent : ReviewsComponent}
    </ReviewsTemplate>
  );
};

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const ReviewWrapper = styled.div`
  margin-bottom: 20px;
`;

export default ReviewPage;
