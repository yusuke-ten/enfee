import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { ReviewsTemplate } from 'components/templates';
import { withInitialize } from 'containers/hocs';
import { RootState } from 'src/modules';
import { userProfileInAsideSelector } from 'services/selectors';
import { fetchReviewList, reset } from 'modules/review/actions';
import { selectReviews } from 'modules/review/selectors';
import { Link as MenuLinkType } from 'components/molecules/Menu/ReviewMenu';
import { Review } from 'src/services/models';

import { productCategoryList } from 'src/services/mocks/productCategoryList';

const links: MenuLinkType[] = [
  { text: 'すべて', to: '/reviews' },
  { text: 'セブン−イレブン', to: '/reviews/seven' },
  { text: 'ファミリーマート', to: '/reviews/family' },
  { text: 'ローソン', to: '/reviews/lawson' },
];

const filterMenuItems: { text: string; isCurrent?: boolean }[] = [
  { text: 'フォロー中', isCurrent: true },
  { text: '全体' },
];

const selectItems = productCategoryList;

const selectProps = {
  value: '0',
  onChange: () => {},
};

const filterMenuProps = {
  selectItems,
  selectProps,
  menuItems: filterMenuItems,
  handleClick: () => {},
};

const ReviewsPageContainer: React.FC<
  RouteComponentProps<{ store: string }>
> = ({ history, match }) => {
  const { store } = match.params;

  console.log('store params', store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset.reviewList());
    dispatch(fetchReviewList.start({ store }));
  }, [store]);

  const [isModal, toggleModal] = useState<boolean>(false);

  const openModal = useCallback(() => {
    toggleModal(true);
  }, []);

  const closeModal = useCallback(() => {
    toggleModal(false);
  }, []);

  const {
    auth: { isLoggedIn },
    app: { myProfile: myProfileState },
  } = useSelector((state: RootState) => state);
  const { entities: reviews, loaded } = useSelector(selectReviews);

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
      isLoadingReview={!loaded}
      myProfile={myProfile}
      isLoggedIn={isLoggedIn}
      filterReviewMenuProps={filterMenuProps}
    />
  );
};

export default withInitialize(withRouter(ReviewsPageContainer));
