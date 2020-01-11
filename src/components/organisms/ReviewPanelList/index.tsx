import React from 'react';
import styled from 'styled-components';
import { LoadingContents } from 'components/molecules';
import { ReviewPanel } from 'components/organisms';
import { Review } from 'services/models';

export interface Props {
  reviews: Review[];
  openModal: (reviewId: number) => void;
  isLoadingReview: boolean;
  userHidden?: boolean;
}

const ReviewPanelList: React.FC<Props> = ({
  reviews,
  openModal,
  isLoadingReview,
  userHidden = false,
}) => {
  return (
    <>
      {isLoadingReview ? (
        <LoadingContents height={160} spinnerSize={26} />
      ) : (
        <>
          {reviews.map(review => (
            <ReviewWrapper key={review.id}>
              <ReviewPanel
                review={review}
                onOpenModal={openModal}
                userHidden={userHidden}
              />
            </ReviewWrapper>
          ))}
        </>
      )}
    </>
  );
};

const ReviewWrapper = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default ReviewPanelList;
