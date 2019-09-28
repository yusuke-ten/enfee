import React from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import { ReviewMenu } from 'components/molecules';
import { Header, ReviewPanelList } from 'components/organisms';
import { Link as MenuLinkType } from 'components/molecules/Menu/ReviewMenu';
import { ReviewDetailPageContainer } from 'containers/pages';
import { Review } from 'services/models';
import { Color } from 'src/const';

interface Props {
  menuLinks: MenuLinkType[];
  Aside: JSX.Element;
  isModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  reviews: Review[];
  isLoadingReview: boolean;
}

const ReviewsTemplate: React.FC<Props> = ({
  menuLinks,
  Aside,
  isModal,
  openModal,
  closeModal,
  reviews,
  isLoadingReview,
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
          <AsideWrapper>{Aside}</AsideWrapper>
        </Contents>
      </Body>
      {isModal && <ReviewDetailPageContainer closeModal={closeModal} />}
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

  & button {
    margin-bottom: 20px;
  }
`;

export default ReviewsTemplate;
