import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { ReviewsTemplate } from 'components/templates';
import { withInitialize } from 'containers/hocs';
import { RootState } from 'src/modules';
import useSelect from 'src/hooks/useSelect';
import { userProfileInAsideSelector } from 'services/selectors';
import { fetchReviewList, reset } from 'modules/review/actions';
import { selectReviews } from 'modules/review/selectors';
import { Link as MenuLinkType } from 'components/molecules/Menu/ReviewMenu';

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

const ReviewsPageContainer: React.FC<
  RouteComponentProps<{ store: string }>
> = ({ history, match }) => {
  const { store } = match.params;

  const dispatch = useDispatch();
  const categorySelectProps = useSelect('');

  useEffect(() => {
    dispatch(reset.reviewList());
    dispatch(
      fetchReviewList.start({
        store,
        category: categorySelectProps.value || undefined,
      }),
    );
  }, [store, categorySelectProps.value]);

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
  const productCategoryList = useSelector(
    (state: RootState) => state.review.productCategory.entities,
  );

  const myProfile = useMemo(() => userProfileInAsideSelector(myProfileState), [
    myProfileState,
  ]);

  const filterMenuProps = {
    selectItems: productCategoryList,
    selectProps: categorySelectProps,
    menuItems: filterMenuItems,
    handleClick: () => {},
  };

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
