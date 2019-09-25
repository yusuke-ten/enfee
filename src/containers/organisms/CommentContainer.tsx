import React, { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Comment, { Props as CommentProps } from 'components/organisms/Comment';

type Props = Pick<CommentProps, 'comment'>;

const CommenrContainer: React.FC<Props> = ({ comment }) => {
  const [isDisplayReplies, updateIsDisplayReplies] = useState(false);
  const [isReplyLoading, updateIsReplyLoading] = useState(false);

  const dispatch = useDispatch();

  const handleOpenReplies = (id: number) => {
    console.log(`コメントID: ${id}のリプライを取得します`);

    updateIsDisplayReplies(true);
  };

  const hiddenDisplayReplies = () => {
    updateIsDisplayReplies(false);
  };

  const handleReplySubmit = (id: number, value: string) => {
    console.log(`コメントID: ${id}に対してリプライしるよ「${value}」`);
  };

  const handleLike = () => {
    if (comment.liked) {
      console.log(`id: ${comment.id}のライクを解除します`);
    } else {
      console.log(`id: ${comment.id}をライクしました`);
    }
  };

  return (
    <Comment
      {...{
        comment,
        handleOpenReplies,
        isDisplayReplies,
        hiddenDisplayReplies,
        handleReplySubmit,
        isReplyLoading,
        handleLike,
      }}
    />
  );
};

export default CommenrContainer;
