import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Layout from 'components/Layout';
import { ReviewMenu, Aside, PenLauncherButton } from 'components/molecules';
import { ReviewPanelList } from 'components/organisms';
import FilterReviewMenu, {
  FilterReviewProps,
} from 'components/organisms/FilterReviewMenu';
import { FilteringLink } from 'components/molecules/Menu/ReviewMenu';
import { ReviewDetailModalContainer } from 'containers/organisms';
import { Review, MyProfileInAside } from 'services/models';
import { Color, Size, getPageTitle } from 'src/const';

interface Props {
  menuLinks: FilteringLink[];
  isModal: boolean;
  openModal: (reviewId: number) => void;
  closeModal: () => void;
  reviews: Review[];
  isLoadingReview: boolean;
  myProfile: MyProfileInAside | null;
  isLoggedIn: boolean;
  filterReviewMenuProps: FilterReviewProps;
  currentScrollY: number;
  undoScrollTop: () => void;
  store?: string;
}

const ReviewsTemplate: React.FC<Props> = ({
  menuLinks,
  isModal,
  openModal,
  closeModal,
  reviews,
  isLoadingReview,
  myProfile,
  isLoggedIn,
  filterReviewMenuProps,
  currentScrollY,
  undoScrollTop,
  store,
}) => {
  return (
    <Layout title={getPageTitle['/reviews/:store'](store)} withHeader>
      <Body>
        <Contents>
          <NavWrapper>
            <ReviewMenu links={menuLinks} />
          </NavWrapper>
          <MainWrapper>
            <StyledFilterReviewMenu {...filterReviewMenuProps} />
            <ReviewPanelList
              reviews={reviews}
              openModal={openModal}
              isLoadingReview={isLoadingReview}
            />
          </MainWrapper>
          <AsideWrapper>
            <Aside myProfile={myProfile} />
          </AsideWrapper>
        </Contents>
      </Body>
      <LauncherWrapper>
        <PenLauncherButton to="/reviews/new" />
      </LauncherWrapper>
      {isModal ? (
        <>
          <BackgroundFixedStyle currentScrollY={currentScrollY} />
          <ReviewDetailModalContainer closeModal={closeModal} />
        </>
      ) : (
        <>{undoScrollTop()}</>
      )}
    </Layout>
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

const Body = styled.div`
  min-height: calc(100vh - 50px);
  padding: 32px 16px;
  background-color: ${Color.BACKGROUND.LIGTH};
  box-sizing: border-box;
`;
const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const NavWrapper = styled.div`
  width: 200px;
  position: sticky;
  top: 1em;
`;
const MainWrapper = styled.div`
  /* margin-left: 16px; */
  width: 460px;
`;
const AsideWrapper = styled.div`
  width: 240px;
  margin-left: 16px;

  @media (max-width: ${Size.BREAK_POINT.TABLET}px) {
    display: none;
  }
`;
const LauncherWrapper = styled.div`
  display: none;

  @media (max-width: ${Size.BREAK_POINT.TABLET}px) {
    display: inline-block;
    position: fixed;
    bottom: 28px;
    right: 28px;
  }

  @media (max-width: ${Size.BREAK_POINT.MOBILE}px) {
    display: inline-block;
    position: fixed;
    bottom: 18px;
    right: 18px;
  }
`;
const StyledFilterReviewMenu = styled(FilterReviewMenu)`
  margin-bottom: 10px;
`;

export default ReviewsTemplate;
