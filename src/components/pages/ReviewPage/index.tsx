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

import { Link as MenuLinkType } from 'components/molecules/Menu/ReviewMenu';

/* モックデータ */
import reviewData from 'src/services/mocks/reviews.json';
import camelcaseKeys from 'camelcase-keys';
import Review from 'src/services/models/review';

const reviews = camelcaseKeys(reviewData, { deep: true }) as Review[];

const imageUrl =
  'https://s3-ap-northeast-1.amazonaws.com/aohiro-blog/User/avatar/dot.jpg';
const displayName = 'あおひろ';
const loginName = '@aohiro';
const statsList = [
  { heading: 'レビュー', amount: 30 } as const,
  { heading: 'フォロー', amount: 59 } as const,
  { heading: 'フォロワー', amount: 103 } as const,
];
/* ------------ */

const links: MenuLinkType[] = [
  { text: 'すべて', to: '/reviews/all' },
  { text: 'セブン−イレブン', to: '/reviews/seven-eleven' },
  { text: 'ファミリーマート', to: '/reviews/family-mart' },
  { text: 'ローソン', to: '/reviews/lawson' },
];

interface Props {
  isLoadingReview: boolean;
}

const ReviewPage: React.FC<Props> = ({ isLoadingReview = false }) => {
  const LoadingComponent = (
    <SpinnerWrapper>
      <Spinner color="primary" height={45} width={45} />
    </SpinnerWrapper>
  );

  const ReviewsComponent = reviews.map(review => (
    <ReviewWrapper key={review.id}>
      <ReviewPanel review={review} />
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
            <UserProfileCard
              {...{ imageUrl, displayName, loginName, statsList }}
            />
          </RightWrapper>
        </Container>
      </Main>
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
`;
const NavWrapper = styled.div`
  width: 200px;
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
