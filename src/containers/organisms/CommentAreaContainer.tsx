import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import CommentArea from 'components/organisms/CommentArea';

const useCommentProps = () => {
  const [commentValue, changeCommentValue] = useState<string>('');

  const commentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCommentValue(e.target.value);
  };

  const submitCommentHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`submit comment! value: ${commentValue}`);
    changeCommentValue('');
  };

  return { commentValue, commentChangeHandler, submitCommentHandler };
};

const useSelectProps = () => {
  const comments = useSelector((state: RootState) => state.comment.comments);

  return { comments };
};

interface OwnProps {
  reviewId: number;
}

const CommentAreaContainer: React.FC<OwnProps> = ({ reviewId }) => {
  console.log(reviewId);

  const passProps = {
    ...useSelectProps(),
    ...useCommentProps(),
    reviewId,
  };

  return <CommentArea {...passProps} />;
};

export default CommentAreaContainer;
