import React from 'react';
import styled from 'styled-components';
import { AvatarCircle, Spinner } from 'components/atoms';
import { Like, ToggleAngle, CommentInputField } from 'components/molecules';
import { ReplyComment } from 'components/organisms';
import { Comment as IComment } from 'services/models/reviewDetail';
import { Color, Size } from 'src/const';
import { format } from 'utils/date';

export interface CommentProps {
  comment: IComment;
  replies: IComment[] | null;
  replyValue: string;
  isDisplayReplies: boolean;
  isDisplayReplyForm: boolean;
  isReplyLoading: boolean;
  handleOpenReplies: (id: number) => void;
  handleHiddenReplies: () => void;
  handleReplySubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChangeReplyValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggleDisplayReplayForm: () => void;
  handleLike: (commentId: number, liked: boolean) => void;
}

const Comment: React.FC<CommentProps> = ({
  comment,
  replies,
  replyValue,
  isDisplayReplies,
  isDisplayReplyForm,
  isReplyLoading = false,
  handleToggleDisplayReplayForm,
  handleChangeReplyValue,
  handleOpenReplies,
  handleHiddenReplies,
  handleReplySubmit,
  handleLike,
  ...props
}) => {
  const {
    id: commentId,
    comment: body,
    likeCount,
    createdAt,
    replyCount,
    liked,
    user,
  } = comment;

  const ToggleReplyDisplayButton = () => {
    if (isDisplayReplies) {
      return (
        <ShowReply onClick={handleHiddenReplies}>
          <ToggleAngle text="返信を非表示にする" iconType="up" />
        </ShowReply>
      );
    }

    return (
      <ShowReply onClick={() => handleOpenReplies(commentId)}>
        <ToggleAngle text={`${replyCount}件の返信を表示`} iconType="down" />
      </ShowReply>
    );
  };

  return (
    <Container {...props}>
      <AvatarFrame>
        <AvatarCircle src={user.imageUrl} />
      </AvatarFrame>
      <Content>
        <Top>
          <Name>
            {user.displayName} {user.loginName}
          </Name>
          <span>{format(createdAt)}</span>
        </Top>
        <Body>{body}</Body>
        <Desc>
          <Like
            count={likeCount}
            isLiked={liked}
            handleClick={() => handleLike(commentId, liked)}
          />
          <DoReply onClick={handleToggleDisplayReplayForm}>
            {isDisplayReplyForm ? '返信をキャンセル' : '返信する'}
          </DoReply>
        </Desc>
        {isDisplayReplyForm && (
          <form onSubmit={handleReplySubmit}>
            <CommentInputField
              imageUrl=""
              value={replyValue}
              onChange={handleChangeReplyValue}
              reply
            />
          </form>
        )}
        {replyCount > 0 && <ToggleReplyDisplayButton />}
        {isDisplayReplies &&
          (isReplyLoading ? (
            <RepliesArea>
              <Spinner color="gray" height={30} width={30} />
            </RepliesArea>
          ) : (
            <RepliesArea>
              {replies &&
                replies.map(replyComment => (
                  <ReplyComment
                    key={replyComment.id}
                    comment={replyComment}
                    handleLike={handleLike}
                  />
                ))}
            </RepliesArea>
          ))}
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
  flex: 1;
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
  cursor: pointer;
  padding-left: 14px;
  text-decoration: underline;
`;
const ShowReply = styled.div`
  cursor: pointer;
`;
const RepliesArea = styled.div`
  padding: 10px 0;
`;

export default Comment;
