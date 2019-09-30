import React, { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Comment, { Props as CommentProps } from 'components/organisms/Comment';

type Props = Pick<CommentProps, 'comment'> & { reviewId: number };

const CommenrContainer: React.FC<Props> = ({ reviewId, comment }) => {
  const [isDisplayReplies, updateIsDisplayReplies] = useState(false);
  const [isReplyLoading, updateIsReplyLoading] = useState(false);
  const [isDisplayReplyForm, toggleReplyForm] = useState<boolean>(false);
  const [replyValue, changeReplyValue] = useState<string>('');

  const dispatch = useDispatch();

  const handleOpenReplies = (id: number) => {
    console.log(`コメントID: ${id}のリプライを取得します`);

    updateIsDisplayReplies(true);
  };

  const handleHiddenReplies = () => {
    updateIsDisplayReplies(false);
  };

  const handleChangeReplyValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      changeReplyValue(e.target.value);
    },
    [],
  );

  const handleToggleDisplayReplayForm = useCallback(() => {
    toggleReplyForm(!isDisplayReplyForm);
  }, []);

  const handleLike = useCallback((commentId: number, liked: boolean) => {
    if (liked) {
      console.log(`id: ${commentId}のライクを解除します`);
    } else {
      console.log(`id: ${commentId}をライクしました`);
    }
  }, []);

  const handleReplySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // comment_idとreview_idが必要。
    console.log(
      ` reviewId: ${reviewId}, commentId: ${comment.id}に対してリプライしるよ「${replyValue}」`,
    );
  };

  return (
    <Comment
      {...{
        comment,
        replyValue,
        handleOpenReplies,
        handleChangeReplyValue,
        isDisplayReplies,
        isDisplayReplyForm,
        handleHiddenReplies,
        handleReplySubmit,
        handleToggleDisplayReplayForm,
        isReplyLoading,
        handleLike,
      }}
    />
  );
};

export default CommenrContainer;
