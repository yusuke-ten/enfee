import React from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import { ReviewMenu, Aside } from 'components/molecules';
import { Header, ReviewPanelList } from 'components/organisms';
import { Link as MenuLinkType } from 'components/molecules/Menu/ReviewMenu';
import { ReviewDetailModalContainer } from 'containers/organisms';
import { Review, MyProfileInAside } from 'services/models';
import { Color } from 'src/const';

interface Props {
  menuLinks: MenuLinkType[];
  isModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  reviews: Review[];
  isLoadingReview: boolean;
  myProfile: MyProfileInAside;
}

const ReviewsTemplate: React.FC<Props> = ({
  menuLinks,
  isModal,
  openModal,
  closeModal,
  reviews,
  isLoadingReview,
  myProfile,
}) => {
  return (
    <Layout title="レビューページ">
      <Header />
      <Body>
        <Contents>
          <NavWrapper>
            <ReviewMenu links={menuLinks} />
          </NavWrapper>
          <MainWrapper>
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
      {isModal && <ReviewDetailModalContainer closeModal={closeModal} />}
    </Layout>
  );
};

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
  margin: 0 30px;
  width: 460px;
`;
const AsideWrapper = styled.div`
  width: 240px;
`;

export default ReviewsTemplate;
