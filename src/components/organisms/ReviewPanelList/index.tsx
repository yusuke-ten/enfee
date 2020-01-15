import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { LoadingContents } from 'components/molecules';
import { ReviewPanel } from 'components/organisms';
import ReviewDetailModalContainer from 'containers/organisms/ReviewDetailModalContainer';
import { Review } from 'services/models';

export interface Props {
  reviews: Review[];
  isLoadingReview: boolean;
  userHidden?: boolean;
  modalProps: {
    open: boolean;
    handleClose: () => void;
    handleOpen: (reviewId: number) => void;
    currentScrollY: number;
  };
}

const ReviewPanelList: React.FC<Props> = ({
  reviews,
  isLoadingReview,
  userHidden = false,
  modalProps,
}) => {
  const { open, handleClose, handleOpen, currentScrollY } = modalProps;

  return (
    <>
      <>
        {open && <BackgroundFixedStyle currentScrollY={currentScrollY} />}
        <ReviewDetailModalContainer onClose={handleClose} open={open} />
      </>
      {isLoadingReview ? (
        <LoadingContents height={160} spinnerSize={26} />
      ) : (
        <>
          {reviews.map(review => (
            <ReviewWrapper key={review.id}>
              <ReviewPanel
                review={review}
                onOpenModal={handleOpen}
                userHidden={userHidden}
              />
            </ReviewWrapper>
          ))}
        </>
      )}
    </>
  );
};

/* modal表示時に背景をスクロール出来ないよう固定するために使用 */
const BackgroundFixedStyle = createGlobalStyle<{ currentScrollY: number }>`
  #root {
    position: fixed;
    width: 100%;
    top: -${props => props.currentScrollY}px;
  }
`;

const ReviewWrapper = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default ReviewPanelList;
