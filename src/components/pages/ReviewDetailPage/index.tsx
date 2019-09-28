import React from 'react';
import styled from 'styled-components';
import {
  Spinner,
  Line,
  StoreBadge,
  CategoryTag,
  Heading,
  Rating,
  Paragraph,
  Picture,
} from 'components/atoms';
import { Rating as RatingType } from 'components/atoms/Rating';
import {
  Modal,
  UserInfo,
  CountText,
  CommentInputField,
} from 'components/molecules';
import { CommentContainer } from 'containers/organisms';
import {
  ReviewDetail,
  Comment as IComment,
} from 'services/models/reviewDetail';
import { Size, Color } from 'src/const';

interface Props {
  reviewDetail: ReviewDetail;
  isLoading: boolean;
  closeModal: () => void;
  commentValue: string;
  commentChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitCommentHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ReviewDetailPage: React.FC<Props> = ({
  reviewDetail,
  isLoading,
  closeModal,
  commentValue,
  commentChangeHandler,
  submitCommentHandler,
}) => {
  const {
    id,
    productName,
    content,
    picturePath,
    rating,
    createdAt,
    price,
    storeName,
    productCategoryName,
    user,
    comments,
  } = reviewDetail;

  const addRepliesComments = comments.map(comment => {
    const obj = comment as IComment & { replies: IComment[] };
    obj.replies = [];

    return obj;
  });

  return (
    <Modal onClose={closeModal}>
      {isLoading ? (
        <SpinnerContainer>
          <Spinner color="primary" height={40} width={40} />
        </SpinnerContainer>
      ) : (
        <Container>
          <Section>
            <UserInfo
              imageUrl={user.imageUrl}
              displayName={user.displayName}
              loginName={user.loginName}
              userPageUrl={`/users/${user.id}`}
            />
          </Section>
          <Line />
          <Section>
            <TagArea>
              <TagItem>
                <StoreBadge store={storeName} />
              </TagItem>
              <div>
                <CategoryTag text={productCategoryName} />
              </div>
            </TagArea>
          </Section>
          <Line />
          <Section>
            <CreatedAt>投稿日: {createdAt}</CreatedAt>
            <Heading type="h3">{productName}</Heading>
            <Price>価格: ￥{price}</Price>
            <p>
              <Text>おすすめ度: </Text>
              <Rating rating={rating as RatingType} height={16} />
            </p>
            <StyledParagraph>{content}</StyledParagraph>
          </Section>
          <Line />
          <PictureArea>
            {picturePath &&
              picturePath.map(picture => (
                <PictureFrame key={picture} href={picture} target="_blank">
                  <Picture src={picture} />
                </PictureFrame>
              ))}
          </PictureArea>
          <Line />
          <Section>
            <Title>
              <CountText text="コメント" count={comments.length} />
            </Title>
            <form onSubmit={submitCommentHandler}>
              <CommentInputField
                imageUrl=""
                value={commentValue}
                onChange={commentChangeHandler}
              />
            </form>
            <CommentArea>
              {addRepliesComments.map((comment, idx) => (
                <StyledComment key={idx} comment={comment} />
              ))}
            </CommentArea>
          </Section>
        </Container>
      )}
    </Modal>
  );
};

const Container = styled.div``;
const SpinnerContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.div`
  padding: 12px 10px;
`;
const TagArea = styled.div``;
const TagItem = styled.div`
  padding-bottom: 10px;
`;
const CreatedAt = styled.p`
  padding-bottom: 5px;
  font-size: ${Size.FONT_RATIO.BASE}rem;
  color: ${Color.FONT.BASE};
`;
const Text = styled.span`
  font-size: ${Size.FONT_RATIO.BASE}rem;
  color: ${Color.FONT.BASE};
`;
const Price = styled.p`
  padding: 5px 0;
  font-size: ${Size.FONT_RATIO.BASE}rem;
  color: ${Color.FONT.BASE};
`;
const StyledParagraph = styled(Paragraph)`
  font-size: ${Size.FONT_RATIO.BASE}rem;
`;
const PictureArea = styled.div`
  padding: 12px 10px;
  display: flex;
`;
const PictureFrame = styled.a`
  display: inline-block;
  height: 160px;
  width: 200px;
  margin-right: 10px;
`;
const CommentArea = styled.div``;
const StyledComment = styled(CommentContainer)`
  padding-top: 14px;
`;
const Title = styled.div`
  padding-bottom: 14px;
`;

export default ReviewDetailPage;
