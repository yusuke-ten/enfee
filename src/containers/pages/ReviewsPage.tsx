import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { ReviewsTemplate } from 'components/templates';
import { RootState } from 'src/modules';
import { fetchMyProfile } from 'src/modules/app';
import { userProfileInAsideSelector } from 'services/selectors';
import { Link as MenuLinkType } from 'components/molecules/Menu/ReviewMenu';

/* モックデータ */
import reviewData from 'src/services/mocks/json/reviews.json';
import camelcaseKeys from 'camelcase-keys';
import Review from 'src/services/models/review';

const tmpReviews = camelcaseKeys(reviewData, { deep: true }) as {
  [k: string]: any;
}[];

const reviews = tmpReviews as Review[];

const links: MenuLinkType[] = [
  { text: 'すべて', to: '/reviews/all' },
  { text: 'セブン−イレブン', to: '/reviews/seven-eleven' },
  { text: 'ファミリーマート', to: '/reviews/family-mart' },
  { text: 'ローソン', to: '/reviews/lawson' },
];

const ReviewsPageContainer: React.FC<
  RouteComponentProps<{ store: string }>
> = ({ history, match }) => {
  const [isModal, toggleModal] = useState<boolean>(false);

  const isLoadingReview = false;

  const openModal = useCallback(() => {
    toggleModal(true);
  }, []);

  const closeModal = useCallback(() => {
    toggleModal(false);
  }, []);

  const { store } = match.params;

  const {
    isLoggedIn,
    isFetchedProfile,
    myProfile: myProfileState,
  } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn && !isFetchedProfile) {
      dispatch(fetchMyProfile.start());
    }
  }, []);

  const myProfile = useMemo(() => userProfileInAsideSelector(myProfileState), [
    myProfileState,
  ]);

  return (
    <ReviewsTemplate
      menuLinks={links}
      isModal={isModal}
      openModal={openModal}
      closeModal={closeModal}
      reviews={reviews}
      isLoadingReview={isLoadingReview}
      myProfile={myProfile}
    />
  );
};

export default withRouter(ReviewsPageContainer);
