import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'components/atoms';
import { Modal } from 'components/molecules';
import { ReviewDetailArea, CommentArea } from 'components/organisms';
import { ReviewDetail } from 'services/models';

interface Props {
  reviewDetail: ReviewDetail;
  isLoading: boolean;
  closeModal: () => void;
  commentValue: string;
  commentChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitCommentHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ReviewDetailModal: React.FC<Props> = ({
  reviewDetail,
  isLoading,
  closeModal,
  commentValue,
  commentChangeHandler,
  submitCommentHandler,
}) => {
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
    comments,
  } = reviewDetail;

  return (
    <Modal onClose={closeModal}>
      {isLoading ? (
        <SpinnerContainer>
          <Spinner color="primary" height={40} width={40} />
        </SpinnerContainer>
      ) : (
        <Container>
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
          <CommentArea
            {...{
              comments,
              commentValue,
              commentChangeHandler,
              submitCommentHandler,
              reviewId,
            }}
          />
        </Container>
      )}
    </Modal>
  );
};

const SpinnerContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div``;

export default ReviewDetailModal;
