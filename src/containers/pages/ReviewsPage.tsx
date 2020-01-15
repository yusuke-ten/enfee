import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withInitialize } from 'containers/hocs';
import { RootState } from 'modules/reducer';
import useSelect from 'src/hooks/useSelect';
import useQuery from 'src/hooks/useQuery';
import useOpen from 'src/hooks/useOpen';
import { userProfileInAsideSelector } from 'services/selectors';
import { fetchReviewList, reset, fetchReviewDetail } from 'modules/review/actions';
import { selectReviews } from 'modules/review/selectors';
import { storeFilteringLinks, followerFilteringTabs } from 'src/const/Link';
import { ReviewsTemplate } from 'components/templates';

const ReviewsPageContainer: React.FC = () => {
  // query paramから絞り込み情報を取得
  const query = useQuery();
  const store = query.get('store');

  const dispatch = useDispatch();
  const categorySelectProps = useSelect('');

  useEffect(() => {
    dispatch(reset.reviewList());
    dispatch(
      fetchReviewList.start({
        store: store || undefined,
        category: categorySelectProps.value || undefined,
      }),
    );
  }, [store, categorySelectProps.value]);

  const { isOpen, handleClose, handleOpen } = useOpen();
  const [currentScrollY, setCurrentScrollY] = useState<number>(0);
  const [selectedFilterMenu, setSelectedFilterMenu] = useState<string>('全体');

  const handleSelect = useCallback((selectedMenu: string) => {
    setSelectedFilterMenu(selectedMenu);
  }, []);

  const wrappedHandleOpen = useCallback((reviewId: number) => {
    // window.history.pushState(
    //   null,
    //   '',
    //   `reviews/${reviewId}${window.location.search}`,
    // );
    setCurrentScrollY(window.scrollY);
    handleOpen();
    dispatch(fetchReviewDetail.start(reviewId));
  }, []);

  const wrappedHandleClose = useCallback(() => {
    handleClose();
  }, [currentScrollY]);

  const undoScrollTop = () => {
    process.nextTick(() => {
      window.scrollTo(0, currentScrollY);
    });
  };

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
    menuProps: {
      menus: followerFilteringTabs,
      selected: selectedFilterMenu,
      handleSelect,
    },
  };

  return (
    <ReviewsTemplate
      menuLinks={storeFilteringLinks}
      reviews={reviews}
      isLoadingReview={!loaded}
      myProfile={myProfile}
      isLoggedIn={isLoggedIn}
      filterReviewMenuProps={filterMenuProps}
      undoScrollTop={undoScrollTop}
      store={store}
      modalProps={{
        open: isOpen,
        handleOpen: wrappedHandleOpen,
        handleClose: wrappedHandleClose,
        currentScrollY,
      }}
    />
  );
};

export default withInitialize(ReviewsPageContainer);
