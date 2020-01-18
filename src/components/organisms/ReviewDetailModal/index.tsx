import React from 'react';
import styled, { css } from 'styled-components';
import { Spinner } from 'components/atoms';
import { Modal } from 'components/molecules';
import { ReviewDetailArea } from 'components/organisms';
import CommentAreaContainer from 'containers/organisms/CommentAreaContainer';
import { ReviewDetail } from 'services/models';
import { Size } from 'src/const';

interface Props {
  reviewDetail: ReviewDetail | null;
  isLoading: boolean;
  onClose: () => void;
  open: boolean;
}

const ReviewDetailModal: React.FC<Props> = ({
  reviewDetail,
  isLoading,
  onClose,
  open,
}) => {
  if (isLoading || reviewDetail === null) {
    return (
      <Modal onClose={onClose} open={open}>
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
    <Modal onClose={onClose} open={open}>
      <Wrapper>
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
      </Wrapper>
    </Modal>
  );
};

const commonStyle = css`
  width: 60%;
  min-width: ${Size.BREAK_POINT.MOBILE}px;
  max-width: 560px;
`;
const SpinnerContainer = styled.div`
  ${commonStyle}
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  ${commonStyle}
`;

export default ReviewDetailModal;
