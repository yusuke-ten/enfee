import React from 'react';
import styled from 'styled-components';
import { ReviewPanel } from 'components/organisms';
import { Review } from 'services/models';

export interface Props {
  reviews: Review[];
  openModal: () => void;
}

const ReviewPanelList: React.FC<Props> = ({ reviews, openModal }) => {
  return (
    <>
      {reviews.map(review => (
        <ReviewWrapper key={review.id}>
          <ReviewPanel review={review} onOpenModal={openModal} />
        </ReviewWrapper>
      ))}
    </>
  );
};

const ReviewWrapper = styled.div`
  margin-bottom: 20px;
`;

export default ReviewPanelList;
