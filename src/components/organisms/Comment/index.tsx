import React from 'react';
import styled from 'styled-components';
import { AvatarCircle } from 'components/atoms';
import { Like, ToggleAngle } from 'components/molecules';
import { Comment as IComment } from 'services/models/reviewDetail';
import { Color, Size } from 'src/const';

interface Props {
  comment: IComment;
  onOpenReply: (id: number) => void;
}

const Comment: React.FC<Props> = ({ comment, onOpenReply }) => {
  const {
    id,
    comment: body,
    likeCount,
    createdAt,
    replyCount,
    liked,
    user,
  } = comment;

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
          <DoReply>返信する</DoReply>
        </Desc>
        {replyCount > 0 && (
          <ShowReply onClick={() => onOpenReply(id)}>
            <ToggleAngle text={`${replyCount}件の返信を表示`} iconType="down" />
          </ShowReply>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  color: ${Color.FONT.BASE};
`;
const AvatarFrame = styled.div`
  height: 50px;
  width: 50px;
`;
const Content = styled.div`
  padding-left: 16px;
`;
const Top = styled.div`
  font-size: ${Size.FONT_RATIO.MEDIUM}rem;
  padding-bottom: 8px;
`;
const Name = styled.span`
  padding-right: 20px;
`;
const Body = styled.div`
  font-size: ${Size.FONT_RATIO.MEDIUM}rem;
  color: ${Color.FONT.DARK};
  padding-bottom: 10px;
`;
const Desc = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;
const DoReply = styled.span`
  padding-left: 14px;
`;
const ShowReply = styled.div`
  cursor: pointer;
`;

export default Comment;
