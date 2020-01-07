import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReviewPanelList from 'components/organisms/ReviewPanelList';
import { RootState } from 'modules/reducer';
import { actions } from 'modules/user/actions';

const useFetchReviews = () => {
  const dispatch = useDispatch();
  const { loginName } = useParams<{ loginName: string }>();

  useEffect(() => {
    dispatch(actions.fetchReviews.start(loginName));
  }, []);
};

const useStateProps = () => {
  const { reviews, isLoading } = useSelector((state: RootState) => state.user);
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  return { reviews, isLoadingReview: isLoading, isLoggedIn };
};

const ReviewPanelListContainer: React.FC = () => {
  useFetchReviews();

  const passProps = {
    ...useStateProps(),
  };

  return <ReviewPanelList {...passProps} openModal={() => {}} />;
};

export default ReviewPanelListContainer;
