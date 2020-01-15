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

const ReviewsDetailModalContainer: React.FC<{
  onClose: () => void;
  open: boolean;
}> = ({ onClose, open }) => {
  const passProps = {
    ...useStateProps(),
    onClose,
    open,
  };

  return <ReviewDetailModal {...passProps} />;
};

export default ReviewsDetailModalContainer;
