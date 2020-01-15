import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviewDetail } from 'modules/review/actions';
import { RootState } from 'modules/reducer';
import useOpen from 'src/hooks/useOpen';
import ReviewPanelList from 'components/organisms/ReviewPanelList';

const useStateProps = () => {
  const { reviews, isLoading } = useSelector((state: RootState) => state.user);
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  return { reviews, isLoadingReview: isLoading, isLoggedIn };
};

const useReviewDetail = () => {
  const dispatch = useDispatch();

  const { isOpen, handleClose, handleOpen } = useOpen();

  const handleOpenReviewModal = useCallback((reviewId: number) => {
    dispatch(fetchReviewDetail.start(reviewId));
    handleOpen();
  }, []);

  return {
    modalProps: {
      open: isOpen,
      handleClose,
      handleOpen: handleOpenReviewModal,
      currentScrollY: 0,
    },
  };
};

const ReviewPanelListContainer: React.FC = () => {
  const passProps = {
    ...useStateProps(),
    ...useReviewDetail(),
  };

  return <ReviewPanelList {...passProps} userHidden />;
};

export default ReviewPanelListContainer;
