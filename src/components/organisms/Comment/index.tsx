import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { AvatarCircle, Spinner } from 'components/atoms';
import { Like, ToggleAngle, CommentInputField } from 'components/molecules';
import { ReplyComment } from 'components/organisms';
import { Comment as IComment } from 'services/models/reviewDetail';
import { Color, Size } from 'src/const';

export interface Props {
  comment: IComment & { replies: IComment[] };
  handleOpenReplies: (id: number) => void;
  hiddenDisplayReplies: () => void;
  handleReplySubmit: (id: number, value: string) => void;
  isDisplayReplies: boolean;
  isReplyLoading: boolean;
  handleLike: () => void;
}

const Comment: React.FC<Props> = ({
  comment,
  handleOpenReplies,
  isDisplayReplies,
  hiddenDisplayReplies,
  handleReplySubmit,
  isReplyLoading = false,
  handleLike,
  ...props
}) => {
  const [showReplyForm, toggleReplyForm] = useState<boolean>(false);
  const [replyValue, changeReplyValue] = useState<string>('');

  const toggleReplyFormHandler = () => {
    toggleReplyForm(!showReplyForm);
  };

  const changeReplyValueHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      changeReplyValue(e.target.value);
    },
    [],
  );

  const {
    id,
    comment: body,
    likeCount,
    createdAt,
    replyCount,
    liked,
    user,
    replies,
  } = comment;

  const ToggleReplyComponent = () => {
    if (isDisplayReplies) {
      return (
        <ShowReply onClick={hiddenDisplayReplies}>
          <ToggleAngle text="返信を非表示にする" iconType="up" />
        </ShowReply>
      );
    }

    return (
      <ShowReply onClick={() => handleOpenReplies(id)}>
        <ToggleAngle text={`${replyCount}件の返信を表示`} iconType="down" />
      </ShowReply>
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleReplySubmit(id, replyValue);
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
          <span>{createdAt}</span>
        </Top>
        <Body>{body}</Body>
        <Desc>
          <Like count={likeCount} isLiked={liked} handleClick={handleLike} />
          <DoReply onClick={toggleReplyFormHandler}>
            {showReplyForm ? '返信をキャンセル' : '返信する'}
          </DoReply>
        </Desc>
        {showReplyForm && (
          <ReplyForm onSubmit={handleSubmit}>
            <CommentInputField
              imageUrl=""
              value={replyValue}
              onChange={changeReplyValueHandler}
              reply
            />
          </ReplyForm>
        )}
        {replyCount > 0 && <ToggleReplyComponent />}
        {isDisplayReplies &&
          (isReplyLoading ? (
            <RepliesArea>
              <Spinner color="gray" height={30} width={30} />
            </RepliesArea>
          ) : (
            <RepliesArea>
              {replies.map(replyComment => (
                <ReplyComment key={replyComment.id} comment={replyComment} />
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
const ReplyForm = styled.form``;
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
