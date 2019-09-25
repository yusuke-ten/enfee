import React from 'react';
import styled from 'styled-components';
import { AvatarCircle } from 'components/atoms';
import { Like } from 'components/molecules';
import { Comment as IComment } from 'services/models/reviewDetail';
import { Color, Size } from 'src/const';

interface Props {
  comment: IComment;
}

const Comment: React.FC<Props> = ({ comment }) => {
  const { id, comment: body, likeCount, createdAt, liked, user } = comment;

  return (
    <Container>
      <AvatarFrame>
        <AvatarCircle src={user.imageUrl} />
      </AvatarFrame>
      <Content>
        <Top>
          <Name>
            {user.displayName} {user.loginName}
          </Name>
          <span>{createdAt}</span>
        </Top>
        <Body>{body}</Body>
        <Desc>
          <Like count={likeCount} isLiked={liked} />
        </Desc>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  color: ${Color.FONT.BASE};
`;
const AvatarFrame = styled.div`
  height: 40px;
  width: 40px;
`;
const Content = styled.div`
  flex: 1;
  padding-left: 16px;
`;
const Top = styled.div`
  font-size: ${Size.FONT_RATIO.BASE}rem;
  padding-bottom: 8px;
`;
const Name = styled.span`
  padding-right: 20px;
`;
const Body = styled.div`
  font-size: ${Size.FONT_RATIO.BASE}rem;
  color: ${Color.FONT.DARK};
  padding-bottom: 10px;
`;
const Desc = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

export default Comment;
