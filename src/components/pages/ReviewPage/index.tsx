import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'components/atoms';
import {
  ReviewMenu,
  ReviewPostButton,
  UserProfileCard,
} from 'components/molecules';
import { Header, ReviewPanel } from 'components/organisms';
import { Color, Size } from 'src/const';
import Review from 'src/services/models/review';
import { Link as MenuLinkType } from 'components/molecules/Menu/ReviewMenu';
import { ReviewDetailPageContainer } from 'containers/pages';

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

  return (
    <>
      <Header />
      <Main>
        <Container>
          <NavWrapper>
            <ReviewMenu links={links} />
          </NavWrapper>
          <Reviews>
            {isLoadingReview ? LoadingComponent : ReviewsComponent}
          </Reviews>
          <RightWrapper>
            <ReviewPostButton text="レビューを投稿する" />
            {myProfile && (
              <UserProfileCard
                imageUrl={myProfile.imageUrl}
                displayName={myProfile.displayName}
                loginName={myProfile.loginName}
                statsList={myProfile.statsList}
              />
            )}
          </RightWrapper>
        </Container>
      </Main>
      {isModal && <ReviewDetailPageContainer closeModal={closeModal} />}
    </>
  );
};

const Main = styled.div`
  min-height: calc(100vh - 50px);
  padding: 32px 16px;
  background-color: ${Color.BACKGROUND.LIGTH};
  box-sizing: border-box;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const NavWrapper = styled.div`
  width: 200px;
  position: sticky;
  top: 1em;
`;
const Reviews = styled.div`
  margin: 0 30px;
  width: 460px;
`;
const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const ReviewWrapper = styled.div`
  margin-bottom: 20px;
`;
const RightWrapper = styled.div`
  width: 240px;

  & button {
    margin-bottom: 20px;
  }
`;

export default ReviewPage;
