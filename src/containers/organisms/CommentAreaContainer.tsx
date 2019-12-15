import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules/reducer';
import { postComment } from 'modules/comment/actions';
import CommentArea from 'components/organisms/CommentArea';

const useCommentProps = (reviewId: number) => {
  const dispatch = useDispatch();
  const [commentValue, changeCommentValue] = useState<string>('');

  const commentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCommentValue(e.target.value);
  };

  const submitCommentHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postComment.start({ commentValue, reviewId }));
    changeCommentValue('');
  };

  return { commentValue, commentChangeHandler, submitCommentHandler };
};

const useSelectProps = () => {
  const { comments, isPosting } = useSelector((state: RootState) => state.comment);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const myProfile = useSelector((state: RootState) => state.app.myProfile);

  return { comments, isLoggedIn, myProfile, isPosting };
};

interface OwnProps {
  reviewId: number;
}

const CommentAreaContainer: React.FC<OwnProps> = ({ reviewId }) => {
  const passProps = {
    ...useSelectProps(),
    ...useCommentProps(reviewId),
    reviewId,
  };

  return <CommentArea {...passProps} />;
};

export default CommentAreaContainer;
