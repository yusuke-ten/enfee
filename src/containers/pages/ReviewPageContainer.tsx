import React, { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { ReviewPage } from 'components/pages';
import { actionCreators } from 'src/modules/app';

/* モックデータ */
import reviewData from 'src/services/mocks/reviews.json';
import camelcaseKeys from 'camelcase-keys';
import Review from 'src/services/models/review';

const reviews = camelcaseKeys(reviewData, { deep: true }) as Review[];

const myProfile = {
  imageUrl:
    'https://s3-ap-northeast-1.amazonaws.com/aohiro-blog/User/avatar/dot.jpg',
  displayName: 'あおひろ',
  loginName: '@aohiro',
  statsList: [
    { heading: 'レビュー', amount: 30 } as const,
    { heading: 'フォロー', amount: 59 } as const,
    { heading: 'フォロワー', amount: 103 } as const,
  ],
};

const ReviewPageContainer: React.FC<RouteComponentProps<{ store: string }>> = ({
  history,
  match,
}) => {
  const [isModal, toggleModal] = useState<boolean>(false);

  const isLoadingReview = false;

  const openModal = useCallback(() => {
    toggleModal(true);
  }, []);

  const closeModal = useCallback(() => {
    toggleModal(false);
  }, []);

  const { store } = match.params;

  return (
    <ReviewPage
      {...{
        isLoadingReview,
        reviews,
        myProfile,
        isModal,
        openModal,
        closeModal,
      }}
    />
  );
};

export default withRouter(ReviewPageContainer);
