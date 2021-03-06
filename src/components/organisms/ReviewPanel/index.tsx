import React, { useCallback } from 'react';
import styled from 'styled-components';
import Review from 'src/services/models/review';
import {
  StoreBadge,
  CategoryTag,
  Line,
  Picture,
  Rating,
  Paragraph,
} from 'components/atoms';
import { CountText, UserInfo } from 'components/molecules';
import { Rating as RatingType } from 'services/models';
import { Color, Size } from 'src/const';
import { fadeInDown } from 'src/styles/animation';
import { format } from 'utils/date';

interface Props {
  review: Review;
  onOpenModal: (reviewId: number) => void;
  userHidden: boolean;
}

const ReviewPanel: React.FC<Props> = ({ review, onOpenModal, userHidden }) => {
  const {
    id,
    productName,
    content,
    commentCount,
    firstPictureUrl,
    createdAt,
    rating,
    storeName,
    productCategoryName,
    reactions,
    user,
  } = review;

  const handleOpenModal = useCallback(() => {
    onOpenModal(id);
  }, []);

  return (
    <Container>
      <Top>
        <div>
          <LabelItemWrapper>
            <StoreBadge store={storeName} />
          </LabelItemWrapper>
          <LabelItemWrapper>
            <CategoryTag text={productCategoryName} />
          </LabelItemWrapper>
        </div>
        <TopRight>
          <CreatedAt>投稿日: {format(createdAt)}</CreatedAt>
          <CountText text="コメント" count={commentCount} />
        </TopRight>
      </Top>
      <Line />
      {!userHidden && (
        <Author>
          <UserInfo
            imageUrl={user.imageUrl}
            displayName={user.displayName}
            loginName={user.loginName}
            userPageUrl={`/users/${user.loginName}`}
            size="small"
          />
        </Author>
      )}
      <Line />
      <Main onClick={handleOpenModal}>
        <PictureFrame>
          <Picture src={firstPictureUrl} />
        </PictureFrame>
        <ReviewFrame>
          <Heading>{productName}</Heading>
          <div>
            <RateText>おすすめ度: </RateText>
            <Rating rating={rating as RatingType} height={14} />
            <Paragraph>{content.slice(0, 60)}...</Paragraph>
          </div>
        </ReviewFrame>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 1px 2px 4px 0 rgba(133, 131, 131, 0.5);
  border-radius: 2px;
  animation: ${fadeInDown(0.7)} 0.2s both 0.2s;
`;
const Top = styled.div`
  display: flex;
  margin-right: auto;
  justify-content: space-between;
`;
const LabelItemWrapper = styled.div`
  padding-bottom: 4px;
`;
const TopRight = styled.div`
  padding: 6px 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const CreatedAt = styled.p`
  font-size: ${Size.FONT_RATIO.SMALL}rem;
  color: ${Color.FONT.BASE};
`;
const Author = styled.div`
  padding: 8px 10px;
`;
const Main = styled.div`
  cursor: pointer;
  display: flex;
  padding: 10px 10px;
`;
const PictureFrame = styled.div`
  height: 150px;
  width: 210px;
`;
const ReviewFrame = styled.div`
  flex: 1;
  padding: 0 12px;
`;
const Heading = styled.h3`
  font-size: ${Size.FONT_RATIO.BASE}rem;
  color: ${Color.FONT.DARK};
  padding-bottom: 4px;
`;
const RateText = styled.span`
  font-size: ${Size.FONT_RATIO.SMALL}rem;
  color: ${Color.FONT.BASE};
`;

export default ReviewPanel;
