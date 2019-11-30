import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'components/atoms';
import { Modal } from 'components/molecules';
import { ReviewDetailArea } from 'components/organisms';
import CommentAreaContainer from 'containers/organisms/CommentAreaContainer';
import { ReviewDetail } from 'services/models';

interface Props {
  reviewDetail: ReviewDetail | null;
  isLoading: boolean;
  closeModal: () => void;
}

const ReviewDetailModal: React.FC<Props> = ({
  reviewDetail,
  isLoading,
  closeModal,
}) => {
  if (isLoading || reviewDetail === null) {
    return (
      <Modal onClose={closeModal}>
        <SpinnerContainer>
          <Spinner color="primary" height={32} width={32} />
        </SpinnerContainer>
      </Modal>
    );
  }

  const {
    id: reviewId,
    productName,
    content,
    picturePath,
    rating,
    createdAt,
    price,
    storeName,
    productCategoryName,
    user,
  } = reviewDetail;

  return (
    <Modal onClose={closeModal}>
      <div>
        <ReviewDetailArea
          {...{
            productName,
            content,
            picturePath,
            rating,
            createdAt,
            price,
            storeName,
            productCategoryName,
            user,
          }}
        />
        <CommentAreaContainer reviewId={reviewId} />
      </div>
    </Modal>
  );
};

const SpinnerContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ReviewDetailModal;
