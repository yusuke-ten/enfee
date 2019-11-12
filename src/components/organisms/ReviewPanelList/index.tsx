import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'components/atoms';
import { ReviewPanel } from 'components/organisms';
import { Review } from 'services/models';

export interface Props {
  reviews: Review[];
  openModal: () => void;
  isLoadingReview: boolean;
}

const ReviewPanelList: React.FC<Props> = ({
  reviews,
  openModal,
  isLoadingReview,
}) => {
  return (
    <>
      {isLoadingReview ? (
        <SpinnerWrapper>
          <Spinner color="primary" height={30} width={30} />
        </SpinnerWrapper>
      ) : (
        <>
          {reviews.map(review => (
            <ReviewWrapper key={review.id}>
              <ReviewPanel review={review} onOpenModal={openModal} />
            </ReviewWrapper>
          ))}
        </>
      )}
    </>
  );
};

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const ReviewWrapper = styled.div`
  margin-bottom: 20px;
`;

export default ReviewPanelList;
