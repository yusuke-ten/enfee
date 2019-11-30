import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import { ReviewDetailModal } from 'components/organisms';

const useStateProps = () => {
  const { loaded, entities: reviewDetail } = useSelector(
    (state: RootState) => state.review.reviewDetail,
  );

  return { isLoading: !loaded, reviewDetail };
};

const ReviewsDetailModalContainer: React.FC<{ closeModal: () => void }> = ({
  closeModal,
}) => {
  const passProps = {
    ...useStateProps(),
    closeModal,
  };

  return <ReviewDetailModal {...passProps} />;
};

export default ReviewsDetailModalContainer;
