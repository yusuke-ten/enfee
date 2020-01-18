import React from 'react';
import styled from 'styled-components';
import {
  Line,
  Heading,
  StoreBadge,
  CategoryTag,
  Rating,
  Picture,
  Paragraph,
} from 'components/atoms';
import { UserInfo } from 'components/molecules';
import { ReviewDetail } from 'services/models';
import { Color, Size } from 'src/const';
import { format } from 'utils/date';

type Props = Omit<ReviewDetail, 'id' | 'comments'>;

const ReviewDetailArea: React.FC<Props> = ({
  user,
  productName,
  productCategoryName,
  picturePath,
  rating,
  createdAt,
  price,
  storeName,
  content,
}) => {
  return (
    <>
      <Section>
        <UserInfo
          imageUrl={user.imageUrl}
          displayName={user.displayName}
          loginName={user.loginName}
          userPageUrl={`/users/${user.displayName}`}
        />
      </Section>
      <Line />
      <Section>
        <div>
          <TagItem>
            <StoreBadge store={storeName} />
          </TagItem>
          <div>
            <CategoryTag text={productCategoryName} />
          </div>
        </div>
      </Section>
      <Line />
      <Section>
        <CreatedAt>投稿日: {format(createdAt)}</CreatedAt>
        <Heading type="h3">{productName}</Heading>
        <Price>価格: ￥{price}</Price>
        <p>
          <Text>おすすめ度: </Text>
          <Rating rating={rating} height={16} />
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
    </>
  );
};

const Section = styled.div`
  padding: 12px 10px;
`;
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

export default ReviewDetailArea;
